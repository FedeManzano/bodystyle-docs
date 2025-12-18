/**
 * EJEMPLO DE INTEGRACIÓN CON index.js
 * 
 * Este archivo muestra cómo integrar el buscador con Web Worker
 * en la estructura actual de docs.js
 */

// ===========================
// OPCIÓN 1: IMPORTAR EN index.js
// ===========================

/*
import "./buscador.js"
import indicesBusqueda from "./search.js"

window.onload = () => {
  setTimeout(() => {
    // ... código existente ...
    
    // Inicializar buscador
    window.BuscadorModule.Init(indicesBusqueda)
    
    // ... resto del código ...
  }, 100);
}
*/


// ===========================
// OPCIÓN 2: CARGA DINÁMICA
// ===========================

/*
// En index.js
window.onload = () => {
  setTimeout(() => {
    // ... código existente ...
    
    // Cargar buscador dinámicamente
    Promise.all([
      import('./buscador.js'),
      import('./search.js')
    ]).then(([buscador, search]) => {
      window.BuscadorModule.Init(search.default)
    })
    
    // ... resto del código ...
  }, 100);
}
*/


// ===========================
// OPCIÓN 3: AGREGAR A BS
// ===========================

/*
// En bodystyle.js o donde definas BS
window.BS = {
  // ... métodos existentes ...
  
  // Nuevo método para buscador
  BuscadorInit: function(indices) {
    return window.BuscadorModule.Init(indices)
  },
  
  BuscadorDestroy: function() {
    window.BuscadorModule.Destroy()
  }
}

// Uso en index.js:
// BS.BuscadorInit(indicesBusqueda)
*/


// ===========================
// PLANTILLA HTML RECOMENDADA
// ===========================

/*
<div class="buscador-wrapper">
  <div class="input-group">
    <input 
      type="search" 
      data-buscar
      placeholder="Buscar páginas, componentes..."
      autocomplete="off"
      class="form-control"
    >
    <div class="indicador-carga" data-cargando style="display: none;">
      <span class="spinner"></span>
    </div>
  </div>
  
  <div class="resultados-container" data-resultados></div>
</div>
*/


// ===========================
// ESTILOS NECESARIOS EN SASS/CSS
// ===========================

/*
.buscador-wrapper {
  position: relative;
  margin-bottom: 20px;
}

.indicador-carga {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
}

.spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(102, 126, 234, 0.2);
  border-top-color: #667eea;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.resultados-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-height: 500px;
  overflow-y: auto;
  margin-top: 10px;
  
  &:empty {
    display: none !important;
  }
}

.resultado-item {
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: #f9f9f9;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  h4 {
    margin: 0 0 8px 0;
    color: #667eea;
    font-size: 1.05em;
    font-weight: 600;
  }
}

.resultado-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  display: inline-block;
  padding: 3px 10px;
  background: #f0f0f0;
  border-radius: 20px;
  font-size: 0.85em;
  color: #666;
  white-space: nowrap;
  
  mark {
    background: #ffd700;
    color: #333;
    font-weight: bold;
    padding: 0 2px;
    border-radius: 2px;
  }
}

.resultado-vacio,
.resultado-error {
  padding: 30px 20px;
  text-align: center;
  color: #999;
}

.resultado-stats {
  padding: 10px 16px;
  background: #f9f9f9;
  color: #999;
  font-size: 0.85em;
  border-top: 1px solid #f0f0f0;
}
*/


// ===========================
// ESTRUCTURA RECOMENDADA EN NAVEGACIÓN
// ===========================

/*
<!-- En navbar o sidebar -->
<div class="nav-search">
  <input 
    type="search" 
    data-buscar
    placeholder="Buscar..."
    class="form-control form-control-sm"
  >
  <div data-cargando class="spinner-xs"></div>
  <div data-resultados class="search-results"></div>
</div>
*/


// ===========================
// TESTEO EN CONSOLA
// ===========================

/*
// Verificar que el worker está activo
console.log('Buscador activo:', !!window.buscador)

// Buscar manualmente
window.buscador.buscar('botones')

// Ver resultados
console.log(window.buscador.resultados)

// Ver índices cargados
console.log('Índices:', window.buscador.indicesBusqueda.length)

// Medir tiempo de búsqueda
console.time('busqueda')
window.buscador.buscar('form')
console.timeEnd('busqueda')
*/


// ===========================
// INTEGRACIÓN CON WEBPACK
// ===========================

/*
// Si usas webpack, asegúrate de que los workers se incluyan:

// webpack.config.js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' }
      }
    ]
  }
}

// O sin worker-loader, el worker se carga dinámicamente
// y webpack lo incluye automáticamente
*/


export default {
  // Este es un archivo de ejemplo, no se exporta
  message: 'Ver comentarios para ejemplos de integración'
}
