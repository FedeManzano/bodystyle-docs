/**
 * BUSCADOR.JS - Sistema de búsqueda con Web Worker
 * 
 * CONCEPTOS APRENDIDOS:
 * 1. Web Workers: Ejecutan código en paralelo sin bloquear la UI
 * 2. Comunicación entre Thread principal y Worker: postMessage() y message events
 * 3. Separación de lógica: UI en main thread, procesamiento en worker
 * 4. Performance: Búsquedas no-bloqueantes en operaciones costosas
 * 
 * Integración con docs.js:
 * - Se activa mediante BS.BuscadorInit()
 * - Compatible con la estructura de bodystyle
 */



class Buscador {
    constructor(indicesBusqueda = []) {
        // Crear instancia del Web Worker
        try {
            // Crear worker como Blob para evitar problemas de rutas
            const workerCode = this.getWorkerCode();
            const blob = new Blob([workerCode], { type: 'application/javascript' });
            const workerUrl = URL.createObjectURL(blob);
            this.worker = new Worker(workerUrl);
            this.workerUrl = workerUrl; // Guardar para limpieza posterior
        } catch(e) {
            console.error('Error creando worker:', e);
            // Fallback: crear un fake worker para debugging
            this.worker = this.createFallbackWorker();
        }
        
        // Estado del buscador
        this.resultados = [];
        this.cargando = false;
        this.indicesBusqueda = indicesBusqueda;
        
        // Elementos del DOM
        this.inputBusqueda = document.querySelector('[data-buscar]');
        this.containerResultados = document.querySelector('[data-resultados]');
        this.indicadorCarga = document.querySelector('[data-cargando]');
        
        // Inicializar worker con índices
        if (indicesBusqueda.length > 0) {
            this.worker.postMessage({
                tipo: 'init',
                indices: indicesBusqueda
            });
        }
        
        // Event Listeners del worker
        this.setupWorkerListeners();
        
        // Event Listeners de la UI
        this.setupUIListeners();
    }
    
    /**
     * CONCEPTO: Escuchar mensajes del Worker
     * El worker envía resultados mediante postMessage()
     * Capturamos con el evento 'message'
     */
    setupWorkerListeners() {
        this.worker.addEventListener('message', (event) => {
            const { tipo, datos, tiempo } = event.data;
            
            switch(tipo) {
                case 'resultados':
                    this.mostrarResultados(datos, tiempo);
                    break;
                case 'error':
                    console.error('Error en worker:', datos);
                    this.mostrarError();
                    break;
            }
        });
        
        // Manejar errores del worker
        this.worker.addEventListener('error', (error) => {
            console.error('Error en Web Worker:', error.message);
            this.mostrarError();
        });
    }
    
    /**
     * CONCEPTO: Event Delegation
     * Escuchar cambios en el input de búsqueda
     * Usar debounce para evitar múltiples búsquedas mientras escribe
     */
    setupUIListeners() {
        if (!this.inputBusqueda) return;
        
        // Debounce: esperar 300ms sin escribir antes de buscar
        let timeoutBusqueda;
        
        this.inputBusqueda.addEventListener('input', (e) => {
            clearTimeout(timeoutBusqueda);
            const termino = e.target.value.trim();
            
            if (termino.length === 0) {
                this.limpiarResultados();
                return;
            }
            
            // Mostrar indicador de carga
            this.cargando = true;
            this.mostrarCargando();
            
            // Programar la búsqueda
            timeoutBusqueda = setTimeout(() => {
                this.buscar(termino);
            }, 300);
        });
    }
    
    /**
     * CONCEPTO: Comunicación Main -> Worker
     * Enviar datos al worker usando postMessage()
     * El worker recibirá esto en su 'message event'
     */
    buscar(termino) {
        // Enviar término de búsqueda al worker
        this.worker.postMessage({
            tipo: 'buscar',
            termino: termino.toLowerCase()
        });
    }
    
    /**
     * Mostrar resultados en la interfaz
     */
    mostrarResultados(resultados, tiempo) {
        this.cargando = false;
        this.resultados = resultados;
        
        if (!this.containerResultados) return;
        
        // Limpiar contenedor
        this.containerResultados.innerHTML = '';
        
        if (resultados.length === 0) {
            this.containerResultados.innerHTML = `
                <div class="resultado-vacio">
                    <p>No se encontraron resultados</p>
                    <small>Tiempo de búsqueda: ${tiempo}ms</small>
                </div>
            `;
            return;
        }
        
        // Crear HTML con resultados
        const html = resultados.map(resultado => `
            <div class="resultado-item">
                <a href="${resultado.url}">
                    <h4>${resultado.title}</h4>
                </a>
                <div class="resultado-tags">
                    ${resultado.tagsMatches.map(tag => 
                        `<span class="tag">${this.destacarTermino(tag)}</span>`
                    ).join('')}
                </div>
            </div>
        `).join('');
        
        this.containerResultados.innerHTML = html;
        this.containerResultados.style.display = 'block';
        
        // Mostrar estadísticas
        const stats = document.createElement('div');
        stats.className = 'resultado-stats';
        stats.textContent = `${resultados.length} resultado(s) - ${tiempo}ms`;
        this.containerResultados.appendChild(stats);
    }
    
    /**
     * Destacar el término buscado en los tags
     */
    destacarTermino(tag) {
        const termino = this.inputBusqueda?.value.trim() || '';
        if (!termino) return tag;
        
        const regex = new RegExp(`(${termino})`, 'gi');
        return tag.replace(regex, '<mark>$1</mark>');
    }
    
    /**
     * Mostrar indicador de carga
     */
    mostrarCargando() {
        if (this.indicadorCarga) {
            this.indicadorCarga.style.display = 'block';
        }
    }
    
    /**
     * Limpiar resultados
     */
    limpiarResultados() {
        this.cargando = false;
        if (this.containerResultados) {
            this.containerResultados.innerHTML = '';
            this.containerResultados.style.display = 'none';
        }
        if (this.indicadorCarga) {
            this.indicadorCarga.style.display = 'none';
        }
    }
    
    /**
     * Mostrar mensaje de error
     */
    mostrarError() {
        this.cargando = false;
        if (this.containerResultados) {
            this.containerResultados.innerHTML = `
                <div class="resultado-error">
                    <p>Error en la búsqueda. Por favor, intenta de nuevo.</p>
                </div>
            `;
        }
    }
    
    /**
     * Crear un worker de fallback para debugging
     */
    createFallbackWorker() {
        console.warn('⚠️ Web Workers no disponibles (archivo local). Usando fallback synchronous.');
        
        const fallbackWorker = new EventTarget();
        const self = this;
        
        // Agregar métodos del Worker API
        fallbackWorker.postMessage = function(msg) {
            // Simular búsqueda síncrona
            if (msg.tipo === 'init') {
                self.indicesBusqueda = msg.indices || [];
            } else if (msg.tipo === 'buscar') {
                setTimeout(() => {
                    const inicio = performance.now();
                    const resultados = self.realizarBusquedaLocal(msg.termino);
                    const tiempo = performance.now() - inicio;
                    
                    const event = new MessageEvent('message', {
                        data: {
                            tipo: 'resultados',
                            datos: resultados,
                            tiempo: tiempo
                        }
                    });
                    fallbackWorker.dispatchEvent(event);
                }, 0);
            }
        };
        
        fallbackWorker.terminate = function() {};
        
        return fallbackWorker;
    }
    
    /**
     * Búsqueda local (fallback)
     */
    realizarBusquedaLocal(termino) {
        if (!termino || termino.trim().length === 0) {
            return [];
        }
        
        return this.indicesBusqueda
            .map(pagina => {
                const tagsMatches = pagina.tags.filter(tag => 
                    tag.toLowerCase().includes(termino.toLowerCase())
                );
                
                return {
                    ...pagina,
                    tagsMatches,
                    relevancia: tagsMatches.length
                };
            })
            .filter(pagina => pagina.relevancia > 0)
            .sort((a, b) => b.relevancia - a.relevancia);
    }
    
    /**
     * Destruir el worker cuando no se necesite más
     */
    destruir() {
        if (this.worker) {
            try {
                this.worker.terminate();
            } catch(e) {
                // Ignorar si es fallback
            }
        }
        // Liberar recurso del Blob URL
        if (this.workerUrl) {
            URL.revokeObjectURL(this.workerUrl);
        }
    }
    
    /**
     * Obtener código del worker como string
     * Esto permite crear el worker como Blob y evitar problemas de rutas
     */
    getWorkerCode() {
        return `
let indicesBusqueda = [];

self.addEventListener('message', (event) => {
    try {
        const { tipo, termino, indices } = event.data;
        
        if (tipo === 'init') {
            indicesBusqueda = indices || [];
            console.log(\`Worker inicializado con \${indicesBusqueda.length} índices\`);
        } else if (tipo === 'buscar') {
            const inicio = performance.now();
            const resultados = realizarBusqueda(termino);
            const tiempo = Math.round(performance.now() - inicio);
            
            self.postMessage({
                tipo: 'resultados',
                datos: resultados,
                tiempo: tiempo
            });
        }
    } catch(error) {
        console.error('Error en worker:', error);
        self.postMessage({
            tipo: 'error',
            datos: error.message
        });
    }
});

function realizarBusqueda(termino) {
    if (!termino || termino.trim().length === 0) {
        return [];
    }
    
    const terminoLower = termino.toLowerCase();
    
    const resultados = indicesBusqueda
        .map(pagina => {
            const tagsMatches = pagina.tags.filter(tag => 
                tag.toLowerCase().includes(terminoLower)
            );
            
            const titleMatch = pagina.title.toLowerCase().includes(terminoLower);
            const relevancia = tagsMatches.length + (titleMatch ? 5 : 0);
            
            return {
                title: pagina.title,
                url: pagina.url,
                tagsMatches,
                relevancia
            };
        })
        .filter(pagina => pagina.relevancia > 0)
        .sort((a, b) => b.relevancia - a.relevancia)
        .slice(0, 20);
    
    return resultados;
}
        `;
    }
}

/**
 * INTEGRACIÓN CON BODYSTYLE
 * Exportar métodos para BS
 */
const BuscadorModule = {
    /**
     * Iniciar buscador con índices personalizados
     * Uso: BS.BuscadorInit(indicesBusqueda)
     */
    Init: function(indicesBusqueda = []) {
        window.buscador = new Buscador(indicesBusqueda);
        return window.buscador;
    },
    
    /**
     * Destruir instancia
     */
    Destroy: function() {
        if (window.buscador) {
            window.buscador.destruir();
            window.buscador = null;
        }
    }
};

// Hacer accesible desde BS
if (typeof window !== 'undefined') {
    window.BuscadorModule = BuscadorModule;
}
