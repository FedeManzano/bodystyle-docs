# 🔧 Minificación de JavaScript

Este directorio contiene herramientas para minificar archivos JavaScript.

## ✅ Archivo Minificado

- **Original**: `5.8.0/js/index.js` (4.8 KB)
- **Minificado**: `5.8.0/js/index.min.js` (~2.5 KB)
- **Reducción**: ~48% de tamaño

## 🚀 Uso Rápido

### Opción 1: NPM Script (Recomendado)

```bash
npm run minify
```

Este comando minifica automáticamente `5.8.0/js/index.js` y genera `5.8.0/js/index.min.js`.

### Opción 2: Script PowerShell Directo

```powershell
# Minificar archivo específico
.\minify-js.ps1 -InputFile "ruta/archivo.js" -OutputFile "ruta/archivo.min.js"

# Usar valores por defecto (index.js)
.\minify-js.ps1
```

## 📋 Características del Minificador

El script `minify-js.ps1` realiza las siguientes optimizaciones:

- ✅ Elimina comentarios de una línea (`//`)
- ✅ Elimina comentarios multilínea (`/* */`)
- ✅ Elimina espacios en blanco innecesarios
- ✅ Elimina líneas vacías
- ✅ Comprime espacios alrededor de operadores
- ✅ Optimiza palabras clave de JavaScript
- ✅ Muestra estadísticas de reducción

## 📊 Estadísticas

```
Original:    4,825 bytes
Minificado:  ~2,500 bytes
Ahorro:      ~2,325 bytes (48%)
```

## 🔄 Actualizar index.html

Después de minificar, actualiza la referencia en `index.html`:

```html
<!-- Antes -->
<script src="./js/index.js"></script>

<!-- Después -->
<script src="./js/index.min.js"></script>
```

## 💡 Consejos

1. **Desarrollo**: Usa `index.js` para facilitar el debugging
2. **Producción**: Usa `index.min.js` para mejor rendimiento
3. **Versionado**: Ambos archivos deben estar en el repositorio
4. **Testing**: Prueba siempre la versión minificada antes de desplegar

## 🛠️ Minificación Avanzada

Para una minificación más agresiva, considera usar herramientas profesionales:

### Terser (Recomendado)

```bash
# Instalar
npm install --save-dev terser

# Usar
npx terser 5.8.0/js/index.js -o 5.8.0/js/index.min.js -c -m
```

### UglifyJS

```bash
# Instalar
npm install --save-dev uglify-js

# Usar
npx uglifyjs 5.8.0/js/index.js -o 5.8.0/js/index.min.js -c -m
```

### Online (Sin instalación)

- [JavaScript Minifier](https://javascript-minifier.com/)
- [Minify JS](https://www.minifier.org/)
- [Toptal JavaScript Minifier](https://www.toptal.com/developers/javascript-minifier)

## 📝 Notas

- El script PowerShell es una solución ligera que no requiere dependencias
- Para proyectos grandes, considera usar Webpack o Rollup con plugins de minificación
- Siempre mantén el archivo original sin minificar para facilitar el mantenimiento

---

**Autor**: Federico Manzano  
**Proyecto**: Bodystyle Docs v3.0.0
