# 🔍 Sistema de Búsqueda Avanzada - Documentación

## ✅ Implementación Completada

Se ha implementado un sistema de búsqueda robusto y eficiente para la documentación de Bodystyle.

---

## 📁 Archivos

### 1. **search.js** (Desarrollo)
**Ubicación**: `5.8.0/js/search.js`
- Código fuente legible y comentado
- Lógica de indexación y búsqueda
- Algoritmo de coincidencia difusa
- Generación de UI dinámica

### 2. **search.min.js** (Producción)
**Ubicación**: `5.8.0/js/search.min.js`
- Versión minificada y optimizada
- Reducción de tamaño para carga rápida
- Integrado en `index.html`

---

## 🚀 Características

### 1. **Búsqueda en Tiempo Real**
- Resultados instantáneos mientras el usuario escribe
- Debounce implícito por la velocidad de ejecución
- Mínimo 2 caracteres para activar

### 2. **Índice Completo**
El sistema indexa **47 páginas** de documentación, incluyendo:
- Título de la página
- URL relativa
- **Tags (Etiquetas)**: Palabras clave relacionadas (ej: "flexbox" -> "alineacion, justificacion")

### 3. **Algoritmo de Búsqueda**
- **Coincidencia en Título**: Prioridad alta
- **Coincidencia en Tags**: Prioridad secundaria
- **Ordenamiento Inteligente**: Los resultados más relevantes aparecen primero

### 4. **Interfaz de Usuario (UI)**
- **Dropdown Flotante**: Aparece debajo del input de búsqueda
- **Diseño Integrado**: Usa estilos de Bodystyle (`card-simple-dark`)
- **Resaltado**: Muestra los tags que coincidieron con la búsqueda
- **Navegación**: Clic en resultado redirige inmediatamente
- **Cierre Automático**: Al hacer clic fuera del área

---

## 💻 Uso en HTML

### Estructura Requerida
```html
<div class="grupo">
    <span class="span-grupo"> <i class="bs-search"></i></span>
    <!-- Input con ID específico -->
    <input id="buscador" type="search" placeholder="Buscar">
</div>
```

### Inicialización
```html
<script src="./js/search.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Init(idInput, idContenedorResultados)
        SearchSystem.init('buscador', 'resultados-busqueda');
    });
</script>
```

---

## 🛠️ Mantenimiento

### Agregar Nuevas Páginas
Para agregar una nueva página al buscador, edita `search.js` y agrega un objeto al array `index`:

```javascript
{ 
    title: 'Nueva Página', 
    url: 'nueva_pagina.html', 
    tags: 'palabra1, palabra2, sinonimo' 
}
```

Luego, regenera el archivo minificado:
```powershell
npm run minify
# O específicamente:
.\minify-js.ps1 -InputFile "5.8.0\js\search.js" -OutputFile "5.8.0\js\search.min.js"
```

---

## 📊 Estadísticas del Índice

| Categoría | Cantidad |
|-----------|----------|
| Componentes | 25+ |
| Utilidades | 15+ |
| Layout | 5+ |
| **Total Páginas** | **47** |

---

**Autor**: Federico Manzano  
**Proyecto**: Bodystyle Docs v3.0.0
