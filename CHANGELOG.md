# Changelog

Todos los cambios notables en la documentación de Bodystyle serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

---

## [3.0.0] - 2025-11-27

### ✨ Agregado
- **Buscador en la documentación**: Implementada funcionalidad de búsqueda con índice actualizado
  - Agregados nuevos términos al índice: Formas, Input, Grupos Formularios
- **SEO**: Implementadas etiquetas `rel="canonical"` en 64 páginas para evitar contenido duplicado

### 🔧 Corregido
- **Error crítico de HTML**: Eliminada etiqueta `</html>` prematura en `index.html` que rompía la estructura del documento
- Restaurada estructura HTML correcta con `<head>` y `<body>` en sus posiciones apropiadas

### 📝 Documentado
- Documentación para Bodystyle v5.8.0
- 76+ páginas HTML con componentes y utilidades

---

## [Unreleased]

### 🎯 Planeado

- Migrar a GitHub Pages o Netlify
- Crear guías de migración entre versiones
- Traducción al inglés
- Modo oscuro (dark mode)
- Sistema de analytics

---

## Documentación v5.8.0 - 2025-10-20

### ✨ Características Principales

#### 🚀 Migración a Vanilla JavaScript
- **Eliminación completa de jQuery**: Todos los módulos internos migrados a JavaScript nativo
- **Reducción del bundle**: De 244 KB a 180 KB (26% de reducción)
- **Mejor rendimiento**: Carga más rápida y menor consumo de recursos
- **APIs nativas**: Uso de `querySelector`, `addEventListener`, `classList`, etc.

#### 🧪 Testing y Calidad
- **Test unitarios**: Cobertura del 87%
- **Validación de módulos**: Pruebas para todos los componentes migrados
- **TypeScript compatible**: Sin necesidad de instalar `@types`

#### 🎨 Nuevas Funcionalidades
- **Animaciones reutilizables**: Módulo de animaciones (`fadeIn`, `fadeOut`, `slideUp`, `slideDown`)
- **Elemento desactivado mejorado**: Sistema simplificado con clase `.desactivado`
- **Compatibilidad con frameworks**: Soporte documentado para Angular, React y Vue

#### 📚 Documentación
- **Página de análisis de rendimiento**: Comparación jQuery vs Vanilla JS
- **Ejemplos interactivos**: Tooltips y elementos dinámicos
- **Guías de integración**: Para Angular, React y Vue
- **76+ páginas**: Documentación completa de componentes

### 🔄 Cambios

#### Módulos Migrados a Vanilla JS
- ✅ Modal.js
- ✅ Toast.js
- ✅ Dropdown.js
- ✅ SidebarDrop.js
- ✅ GruposInput.js
- ✅ Parallax.js
- ✅ Imagenes.js
- ✅ Animaciones.js
- ✅ Waves.js
- ✅ Navigation.js
- ✅ ToolTips.js
- ✅ Personalizado.js
- ✅ Desactivado.js

#### Componentes Documentados
- Alertas
- Badges
- Botones y Grupos de Botones
- Breadcrumbs
- Tarjetas (Cards)
- Checkbox y Radio
- Colecciones
- Colores
- Comentarios
- Contenedores
- Dropdown
- Efectos (Hover, 3D, Waves)
- Etiquetas
- Flexbox
- Formularios e Inputs
- Grid System
- Helpers
- Iconos (Bodystyle Icons)
- Imágenes
- Margin y Padding
- Medidas
- Mensajes
- Modal
- Navegación (Nav)
- Opacidad
- Overflow
- Preloader
- Progress Bar
- Select
- Sidebar
- Solapas (Tabs)
- Switch
- Tablas
- Texto (alineación, tamaño, color)
- Toast
- Tooltips

### 🌐 SEO y Optimización
- **Sitemap.xml**: 301 URLs indexadas
- **robots.txt**: Configuración optimizada para bots
- **Meta tags**: Descriptions en todas las páginas
- **Google Site Verification**: Implementado
- **Favicon**: Configurado correctamente

### 🛠️ Tecnologías
- **SASS** v3.9.3 - Preprocesador CSS
- **Webpack** v5.0.7 - Empaquetador de módulos
- **Babel** v8.0.8 - Transpilador JavaScript
- **Node.js** v22.20.0 - Entorno de ejecución
- **npm** v11.6.1 - Gestor de paquetes

### 📦 Dependencias
- **[dynamics-tips](https://github.com/FedericoManzano/dynamics-tips)** v1.8.0 - Tooltips y elementos dinámicos
- **[show-code](https://github.com/FedericoManzano/show-code)** v1.1.1 - Resaltado de sintaxis

---

## Documentación v5.0.0 - 2024

### ✨ Agregado
- Documentación completa para Bodystyle v5.0.0
- Sistema de grilla mejorado
- Nuevos componentes UI
- Ejemplos de código con sintaxis resaltada

### 🔄 Cambios
- Actualización de la estructura de navegación
- Mejoras en el diseño responsive
- Optimización de imágenes y recursos

---

## Documentación v4.8.0 - 2023

### ✨ Agregado
- 67 páginas de documentación
- Nuevos ejemplos de componentes
- Guías de uso mejoradas

### 🔄 Cambios
- Actualización de estilos visuales
- Mejoras en la navegación lateral

---

## Documentación v4.5.0 - 2023

### ✨ Agregado
- 60 páginas de documentación
- Ejemplos interactivos
- Sección de componentes expandida

---

## Documentación v4.0.0 - 2022

### ✨ Agregado
- Versión inicial de la documentación
- 49 páginas de contenido
- Sistema de navegación básico
- Ejemplos de código
- Guía de inicio rápido

---

## 📋 Tipos de Cambios

- **✨ Agregado** - Para nuevas características
- **🔄 Cambios** - Para cambios en funcionalidades existentes
- **🗑️ Deprecado** - Para características que serán eliminadas
- **🔧 Corregido** - Para corrección de bugs
- **🔒 Seguridad** - Para vulnerabilidades de seguridad
- **📝 Documentado** - Para cambios en la documentación
- **🎨 Estilo** - Para cambios que no afectan la funcionalidad
- **♻️ Refactorizado** - Para refactorización de código
- **⚡ Rendimiento** - Para mejoras de rendimiento
- **🧪 Testing** - Para adición o corrección de tests

---

## 🔗 Enlaces

- [Repositorio Bodystyle](https://github.com/FedeManzano/bodystyle)
- [Documentación Online](https://bodystyle.webcindario.com)
- [NPM Package](https://www.npmjs.com/package/bodyui2)
- [Releases](https://github.com/FedeManzano/bodystyle/releases)

---

## 👨‍💻 Autor

**Federico Manzano**
- GitHub: [@FedeManzano](https://github.com/FedeManzano)
- Universidad Nacional de la Matanza

---

**Nota**: Las fechas son aproximadas basadas en la información disponible. Para fechas exactas, consultar el historial de commits en Git.
