/**
 * BUSCADOR-WORKER.JS - Web Worker para búsqueda
 * Versión simplificada y robusta
 */

let indicesBusqueda = [];

/**
 * ESCUCHAR MENSAJES del thread principal
 */
self.addEventListener('message', (event) => {
    try {
        const { tipo, termino, indices } = event.data;
        
        if (tipo === 'init') {
            // Recibir índices iniciales
            indicesBusqueda = indices || [];
            console.log(`Worker inicializado con ${indicesBusqueda.length} índices`);
        } else if (tipo === 'buscar') {
            // Realizar la búsqueda
            const inicio = performance.now();
            const resultados = realizarBusqueda(termino);
            const tiempo = Math.round(performance.now() - inicio);
            
            // Enviar resultados
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

/**
 * FUNCIÓN DE BÚSQUEDA
 */
function realizarBusqueda(termino) {
    if (!termino || termino.trim().length === 0) {
        return [];
    }
    
    const terminoLower = termino.toLowerCase();
    
    // Filtrar y mapear resultados
    const resultados = indicesBusqueda
        .map(pagina => {
            // Buscar coincidencias en tags
            const tagsMatches = pagina.tags.filter(tag => 
                tag.toLowerCase().includes(terminoLower)
            );
            
            // También buscar en título
            const titleMatch = pagina.title.toLowerCase().includes(terminoLower);
            
            // Calcular relevancia
            const relevancia = tagsMatches.length + (titleMatch ? 5 : 0);
            
            return {
                title: pagina.title,
                url: pagina.url,
                tagsMatches,
                relevancia
            };
        })
        .filter(pagina => pagina.relevancia > 0) // Solo con coincidencias
        .sort((a, b) => b.relevancia - a.relevancia) // Ordenar por relevancia
        .slice(0, 20); // Limitar a 20 resultados
    
    return resultados;
}

/**
 * MÉTODOS ADICIONALES (AVANZADO)
 */

/**
 * Búsqueda fuzzy - encuentra coincidencias incluso con errores tipográficos
 * CONCEPTO: Algoritmo de similitud de strings
 */
function calcularSimilaridad(str1, str2) {
    const s1 = str1.toLowerCase();
    const s2 = str2.toLowerCase();
    
    // Distancia de Levenshtein simplificada
    let coincidencias = 0;
    for (let i = 0; i < Math.min(s1.length, s2.length); i++) {
        if (s1[i] === s2[i]) coincidencias++;
    }
    
    return coincidencias / Math.max(s1.length, s2.length);
}

/**
 * ESTADÍSTICAS DE LA BÚSQUEDA
 * Análisis más profundo (para casos avanzados)
 */
function generarEstadisticas(resultados) {
    return {
        totalResultados: resultados.length,
        relevanciaPromedio: resultados.length > 0 
            ? resultados.reduce((sum, r) => sum + r.relevancia, 0) / resultados.length 
            : 0,
        paginas: resultados.map(r => r.title)
    };
}

/**
 * MANEJO DE ERRORES
 */
self.addEventListener('error', (error) => {
    console.error('Error en worker:', error);
    self.postMessage({
        tipo: 'error',
        datos: error.message
    });
});
