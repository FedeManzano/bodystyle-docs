# 📚 Cómo Agregar el Buscador a la Documentación

## 🎯 Opciones de Integración

Hay 3 formas de hacerlo. Elige la que prefieras:

---

## ✅ **OPCIÓN 1: Integración Rápida (Recomendado)**

### 1️⃣ En cada página HTML (ej: `pages/get_started.html`)

**Busca esta línea:**
```html
<div id="lista-busqueda" class="search-list"></div>
```

**Reemplázala con:**
```html
<!-- Buscador con Web Worker -->
<div class="busqueda-container mb-3">
    <div class="input-g ancho-50 ancho-m-60 ancho-s-80 ancho-xs-100">
        <div class="grupo">
            <span class="span-grupo fd-gris-n c-white">🔎</span>
            <input 
                type="search" 
                id="inputBuscar"
                data-buscar
                class="fd-gris-n c-white" 
                placeholder="Buscar en la documentación..."
            >
            <div class="indicador-carga" data-cargando style="display: none;">
                <span class="spinner"></span>
            </div>
        </div>
    </div>
    <div class="resultados-container" data-resultados></div>
</div>
```

### 2️⃣ Al final del `<body>`, agrega los scripts:

**Busca el final del `<body>`:**
```html
    <script src="../js/bodystyle.bundled.js"></script>
    <script>
        BS.NavigationInit("#nav");
        // ... más código ...
    </script>
</body>
```

**Agrega antes del cierre `</body>`:**
```html
    <!-- Buscador con Web Worker -->
    <script src="../js/buscador.js"></script>
    <script>
        // Índices de búsqueda (importa desde search.js o define aquí)
        const indicesBusqueda = [
            { title: "Botones", url: "botones.html", tags: ["botones", "btn", "accion"] },
            { title: "Colores", url: "colores.html", tags: ["colores", "color", "paleta"] },
            { title: "Grid", url: "grid.html", tags: ["grid", "layout", "responsive"] },
            // ... más índices ...
        ];
        
        // Inicializar buscador
        if (window.BuscadorModule) {
            window.BuscadorModule.Init(indicesBusqueda);
        }
    </script>
</body>
```

### 3️⃣ Agregar CSS (en `css/docs.css`):

```css
/* Estilos del buscador */
.busqueda-container {
    position: relative;
}

.spinner {
    border: 3px solid #f3f3f3;
    border-top: 3px solid #667eea;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.indicador-carga {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
}

.resultados-container {
    background: white;
    border-radius: 6px;
    max-height: 400px;
    overflow-y: auto;
    margin-top: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.resultado-item {
    padding: 12px 16px;
    border-bottom: 1px solid #f0f0f0;
    cursor: pointer;
    transition: background 0.2s;
}

.resultado-item:hover {
    background: #f9f9f9;
}

.resultado-item h4 {
    margin: 0 0 6px 0;
    color: #667eea;
    font-size: 1em;
}

.resultado-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.tag {
    display: inline-block;
    padding: 3px 8px;
    background: #f0f0f0;
    border-radius: 20px;
    font-size: 0.8em;
    color: #666;
}

.resultado-vacio {
    padding: 20px;
    text-align: center;
    color: #999;
}
```

---

## 📝 **OPCIÓN 2: Integración Modular (Mejor para muchas páginas)**

### 1️⃣ Crear un archivo `components/buscador.html`:

```html
<!-- Componente Reutilizable de Buscador -->
<div class="busqueda-container mb-3">
    <div class="input-g ancho-50 ancho-m-60 ancho-s-80 ancho-xs-100">
        <div class="grupo">
            <span class="span-grupo fd-gris-n c-white">🔎</span>
            <input 
                type="search" 
                data-buscar
                class="fd-gris-n c-white" 
                placeholder="Buscar en la documentación..."
            >
            <div class="indicador-carga" data-cargando style="display: none;">
                <span class="spinner"></span>
            </div>
        </div>
    </div>
    <div class="resultados-container" data-resultados></div>
</div>
```

### 2️⃣ En cada página HTML, incluye:

```html
<!-- En <head> -->
<link rel="stylesheet" href="../css/buscador.css">

<!-- En <body>, donde quieras el buscador -->
<div id="search-component"></div>

<!-- Al final, antes de </body> -->
<script src="../js/buscador.js"></script>
<script>
    // Cargar componente
    fetch('../components/buscador.html')
        .then(r => r.text())
        .then(html => {
            document.getElementById('search-component').innerHTML = html;
            
            // Inicializar buscador
            const indicesBusqueda = [...]; // Define aquí
            window.BuscadorModule.Init(indicesBusqueda);
        });
</script>
```

---

## 🚀 **OPCIÓN 3: Integración Global en index.html**

Si quieres que el buscador esté en la navegación de todas las páginas:

### En `index.html`, agrega a la navegación:

```html
<nav id="nav" class="bs-nav bs-nav-fixed">
    <div class="bs-nav-lg align-left-list">
        <!-- Logo y menú existente -->
        
        <!-- Agregar buscador aquí -->
        <div class="nav-search">
            <input 
                type="search" 
                data-buscar
                placeholder="Buscar..."
            >
            <div data-cargando style="display: none;">
                <span class="spinner-sm"></span>
            </div>
            <div data-resultados class="search-results"></div>
        </div>
        
        <!-- Resto del nav -->
    </div>
</nav>
```

### CSS para navbar search:

```css
.nav-search {
    position: relative;
    width: 300px;
}

.nav-search input {
    width: 100%;
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid rgba(255,255,255,0.3);
    background: rgba(255,255,255,0.1);
    color: white;
}

.nav-search input::placeholder {
    color: rgba(255,255,255,0.7);
}

.search-results {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 1000;
}
```

---

## 🎯 Guía de Índices

### Donde definir los índices (elige UNA opción):

**Opción A: En cada página HTML:**
```javascript
const indicesBusqueda = [
    { title: "Botones", url: "botones.html", tags: ["botones", "btn"] },
    { title: "Colores", url: "colores.html", tags: ["colores", "color"] },
];
```

**Opción B: Desde `search.js` (si está disponible):**
```javascript
import indicesBusqueda from '../search.js';
window.BuscadorModule.Init(indicesBusqueda);
```

**Opción C: Cargar dinámicamente desde JSON:**
```javascript
fetch('../data/indices.json')
    .then(r => r.json())
    .then(indices => {
        window.BuscadorModule.Init(indices);
    });
```

### Estructura de cada índice:
```javascript
{
    title: "Nombre de la página",           // Texto mostrado
    url: "paginas/nombre.html",             // URL relativa
    tags: ["tag1", "tag2", "tag3"]          // Palabras clave
}
```

---

## 📋 Checklist de Implementación

### Para cada página donde agregues el buscador:

- [ ] Agregué el HTML del input
- [ ] Agregué `<script src="../js/buscador.js"></script>`
- [ ] Definí el array `indicesBusqueda`
- [ ] Llamé a `window.BuscadorModule.Init(indicesBusqueda)`
- [ ] Agregué los estilos CSS
- [ ] Testé que funciona en el navegador

### Verificación:

```javascript
// En consola, verifica que funciona:
console.log(window.buscador)  // Debe mostrar el objeto
window.buscador.buscar('botones')  // Debe buscar
```

---

## 🐛 Solucionar Problemas

### El buscador no aparece:
```javascript
// Verifica que los elementos tienen los data-* correctos
console.log(document.querySelector('[data-buscar]'))  // Debe retornar el input
console.log(document.querySelector('[data-resultados]'))  // Debe retornar el contenedor
```

### No funciona la búsqueda:
```javascript
// Verifica que los índices se cargaron
console.log(window.buscador.indicesBusqueda)  // Debe mostrar los índices
console.log(window.buscador.indicesBusqueda.length)  // Debe ser > 0
```

### Las rutas no funcionan:
```javascript
// Si los URLs son relativos, asegúrate que sean correctos:
// Dentro de /pages/ : url: "botones.html"
// En raíz: url: "pages/botones.html"
```

---

## 🎨 Personalización

### Cambiar colores:
```css
.resultado-item h4 {
    color: tu-color;  /* Cambiar color del título */
}

.tag {
    background: tu-color;  /* Cambiar color de tags */
}
```

### Cambiar velocidad debounce:
En `buscador.js`, línea ~130:
```javascript
timeoutBusqueda = setTimeout(() => {
    this.buscar(termino);
}, 500);  // Cambiar 300 a 500ms
```

### Agregar más índices:
```javascript
const indicesBusqueda = [
    // Índices existentes...
    { title: "Mi Página", url: "mi-pagina.html", tags: ["palabra1", "palabra2"] },
];
```

---

## ✨ Próximos Pasos

1. ✅ Copiar `buscador.js` a `6.5.0/js/`
2. ✅ Agregar HTML en las páginas
3. ✅ Agregar CSS en `docs.css`
4. ✅ Definir índices
5. ✅ Testear en navegador
6. 📊 Opcionalmente: Agregar analytics
7. 🎨 Opcionalmente: Personalizar estilos

---

**Necesitas ayuda?** Pregunta y te muestro cómo hacer un paso específico.
