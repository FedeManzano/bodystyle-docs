# Integración de Buscador con Web Worker en docs.js

## 📋 Estructura

El buscador está listo para integrarse en `src/index.js`. Los archivos necesarios están en:

- `6.5.0/js/buscador.js` - Controlador principal (UI)
- `6.5.0/js/buscador-worker.js` - Web Worker (lógica de búsqueda)

## 🔧 Integración Paso a Paso

### 1. Importar el módulo en `src/index.js`

Agrega esta línea al inicio de `src/index.js`:

```javascript
import BuscadorModule from './buscador.js'
```

O si usas búsqueda global:

```javascript
import './buscador.js'  // Se carga automáticamente
```

### 2. Inicializar en `window.onload`

En `src/index.js`, dentro de `window.onload`:

```javascript
window.onload = () => {
  setTimeout(() => {
    // ... código existente ...
    
    // NUEVA LÍNEA: Inicializar buscador con índices
    if (indicesBusqueda && indicesBusqueda.length > 0) {
      BS.BuscadorInit = () => BuscadorModule.Init(indicesBusqueda);
      BS.BuscadorInit();
    }
    
    // ... resto del código ...
  }, 100);
}
```

### 3. Usar los índices de `search.js`

Importa el índice desde `search.js`:

```javascript
import indicesBusqueda from './search.js'  // Asume export default
```

O si tienes que cargar dinámicamente:

```javascript
const indicesBusqueda = await import('./search.js')
```

## 📝 Uso en HTML

Agrega estos elementos al HTML donde quieras el buscador:

```html
<!-- Input de búsqueda -->
<input 
    type="search" 
    data-buscar
    placeholder="Buscar..."
    autocomplete="off"
>

<!-- Indicador de carga -->
<div class="indicador-carga" data-cargando style="display: none;">
    <div class="spinner"></div>
</div>

<!-- Contenedor de resultados -->
<div class="resultados-container" data-resultados></div>
```

## 💻 API Disponible

### Iniciar Buscador

```javascript
// Con índices custom
BS.BuscadorInit(miIndice)

// O usar la instancia global
window.buscador.buscar('termino')
```

### Métodos Públicos

```javascript
// Buscar manualmente
window.buscador.buscar('botones')

// Obtener resultados actual
window.buscador.resultados

// Limpiar resultados
window.buscador.limpiarResultados()

// Destruir
window.buscador.destruir()
```

## 🎯 Puntos Clave de Integración

1. **Worker Path**: Asegúrate que `buscador-worker.js` está en la ruta correcta
2. **Índices**: Pasa los índices de búsqueda al inicializar
3. **DOM Hooks**: Los elementos deben tener los `data-*` attributes correctos
4. **CSS**: Agrega estilos para `.resultados-container`, `.resultado-item`, etc.

## 📚 CSS Necesario

Agregar a tus estilos CSS:

```css
.indicador-carga {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
}

.spinner {
    border: 3px solid #f3f3f3;
    border-top: 3px solid #667eea;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.resultados-container {
    background: white;
    border-radius: 8px;
    max-height: 400px;
    overflow-y: auto;
}

.resultado-item {
    padding: 15px;
    border-bottom: 1px solid #f0f0f0;
}

.resultado-item:hover {
    background: #f9f9f9;
}

.resultado-item h4 {
    margin: 0 0 10px 0;
    color: #667eea;
}

.resultado-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tag {
    display: inline-block;
    padding: 4px 12px;
    background: #f0f0f0;
    border-radius: 20px;
    font-size: 0.9em;
    color: #666;
}
```

## 🧪 Testing

Verifica que funcione correctamente:

```javascript
// En console
window.buscador.buscar('botones')

// Debería mostrar resultados sin bloquear la UI
```

## ⚙️ Configuración Avanzada

### Cambiar debounce

En `buscador.js`, línea ~130:

```javascript
timeoutBusqueda = setTimeout(() => {
    this.buscar(termino);
}, 500);  // Cambiar 300ms a lo que necesites
```

### Agregar búsqueda fuzzy

En `buscador-worker.js`, usa `calcularSimilaridad()` para búsquedas más flexibles.

### Cambiar límite de resultados

En `buscador-worker.js`:

```javascript
return resultados.slice(0, 10);  // Mostrar solo 10
```

## 🐛 Debug

Abre DevTools y verifica:

```javascript
// Ver worker thread
// DevTools > Sources > Threads > buscador-worker.js

// Ver estado del buscador
console.log(window.buscador)

// Ver índices cargados
console.log(window.buscador.indicesBusqueda)

// Mensaje de worker
console.log('Worker activo:', !!window.buscador.worker)
```

---

**Nota**: Este sistema es completamente aislado del `search.js` anterior. Puedes usarlos en paralelo sin conflictos.
