/**
 * Sistema de Búsqueda para Bodystyle Docs
 * Implementa búsqueda difusa y sugerencias en tiempo real
 */

const SearchSystem = {
    // Índice de contenidos
    index: [
        { title: 'Get Started', url: 'get_started.html', tags: 'inicio, comenzar, instalacion, cdn, npm, webpack' },
        { title: 'Alertas', url: 'alertas.html', tags: 'alert, mensaje, notificacion, aviso, warning, danger, success' },
        { title: 'Ancho y Alto', url: 'ancho_alto.html', tags: 'width, height, dimensiones, tamaño, size' },
        { title: 'Badges', url: 'badges.html', tags: 'etiqueta, badge, numero, contador, notificacion' },
        { title: 'Bordes', url: 'bordes.html', tags: 'border, radius, redondeado, circulo, pill' },
        { title: 'Botones', url: 'botones.html', tags: 'button, btn, click, accion, submit, reset' },
        { title: 'Botón Inicio', url: 'boton_inicio.html', tags: 'scroll, top, arriba, subir' },
        { title: 'Breadcrumbs', url: 'breadcrumbs.html', tags: 'migas, pan, navegacion, ruta, path' },
        { title: 'Checkbox', url: 'checkbox.html', tags: 'input, check, seleccion, opcion, form' },
        { title: 'Colecciones', url: 'colecciones.html', tags: 'list, lista, grupo, items, collection' },
        { title: 'Colores', url: 'colores.html', tags: 'color, background, texto, fondo, paleta, tema' },
        { title: 'Comentarios', url: 'comentarios.html', tags: 'comment, chat, mensaje, usuario' },
        { title: 'Contenedor', url: 'contenedor.html', tags: 'container, layout, estructura, ancho, max-width' },
        { title: 'Desactivado', url: 'desactivado.html', tags: 'disabled, inactivo, apagado, readonly' },
        { title: 'Dropdown', url: 'dropdown.html', tags: 'menu, desplegable, lista, opciones, select' },
        { title: 'Efecto 3D', url: 'efecto3d.html', tags: '3d, sombra, profundidad, elevacion, card' },
        { title: 'Efecto Hover', url: 'efecto_hover.html', tags: 'hover, mouse, cursor, interaccion, animacion' },
        { title: 'Flexbox', url: 'flexbox.html', tags: 'flex, layout, alineacion, justificacion, distribucion' },
        { title: 'Formularios', url: 'formularios.html', tags: 'form, input, submit, validacion, login, registro' },
        { title: 'Grid System', url: 'grid.html', tags: 'grilla, columnas, filas, responsive, layout, row, col' },
        { title: 'Grupos Form', url: 'grupos_form.html', tags: 'input, group, addon, icono, texto' },
        { title: 'Iconos', url: 'iconos.html', tags: 'icon, font, simbolo, glifo, vector' },
        { title: 'Imágenes', url: 'imagenes.html', tags: 'img, picture, foto, responsive, figura' },
        { title: 'Inputs', url: 'input.html', tags: 'text, password, email, number, date' },
        { title: 'Input File', url: 'input_file.html', tags: 'archivo, subir, upload, file' },
        { title: 'Input Range', url: 'input_range.html', tags: 'rango, slider, control, volumen' },
        { title: 'Margin', url: 'margin.html', tags: 'margen, espaciado, separacion, externo' },
        { title: 'Medidas', url: 'medidas.html', tags: 'rem, em, px, porcentaje, viewport' },
        { title: 'Mensajes', url: 'mensajes.html', tags: 'chat, conversacion, globo, texto' },
        { title: 'Modal', url: 'modal.html', tags: 'popup, ventana, dialogo, overlay, emergente' },
        { title: 'Navbar', url: 'nav.html', tags: 'menu, navegacion, barra, header, responsive' },
        { title: 'Opacidad', url: 'opacidad.html', tags: 'opacity, transparencia, alpha, visible' },
        { title: 'Overflow', url: 'overflow.html', tags: 'scroll, desbordamiento, hidden, auto' },
        { title: 'Padding', url: 'padding.html', tags: 'relleno, espaciado, interno' },
        { title: 'Preloader', url: 'preloader.html', tags: 'loading, carga, spinner, espera' },
        { title: 'Progress Bar', url: 'progressbar.html', tags: 'barra, progreso, carga, porcentaje' },
        { title: 'Radio Button', url: 'radio.html', tags: 'opcion, seleccion, unica, form' },
        { title: 'Scrollspy', url: 'scrollspy.html', tags: 'scroll, navegacion, spy, ancla, menu' },
        { title: 'Select', url: 'select.html', tags: 'combo, lista, opciones, dropdown' },
        { title: 'Sidebar', url: 'sidebar.html', tags: 'menu, lateral, drawer, aside, panel' },
        { title: 'Solapas', url: 'solapas.html', tags: 'tabs, pestañas, navegacion, contenido' },
        { title: 'Switch', url: 'switch.html', tags: 'toggle, interruptor, on, off, check' },
        { title: 'Tablas', url: 'tablas.html', tags: 'table, grid, datos, filas, columnas' },
        { title: 'Tarjetas', url: 'tarjetas.html', tags: 'card, panel, caja, contenedor, imagen' },
        { title: 'Texto', url: 'texto.html', tags: 'font, tipografia, alineacion, estilo, negrita' },
        { title: 'Toast', url: 'toast.html', tags: 'notificacion, mensaje, alerta, snackbar' },
        { title: 'Tooltips', url: 'tooltips.html', tags: 'ayuda, info, hover, titulo, descripcion' },
        { title: 'Waves', url: 'waves.html', tags: 'efecto, onda, click, material, animacion' }
    ],

    // Inicializar el sistema
    init: function (inputId, resultsId, basePath = './paginas/') {
        this.input = document.getElementById(inputId);
        this.basePath = basePath;

        // Crear contenedor de resultados si no existe
        if (!document.getElementById(resultsId)) {
            const resultsDiv = document.createElement('div');
            resultsDiv.id = resultsId;
            resultsDiv.className = 'search-results card-simple-dark';
            resultsDiv.style.display = 'none';
            resultsDiv.style.position = 'absolute';
            resultsDiv.style.top = '100%';
            resultsDiv.style.left = '0';
            resultsDiv.style.width = '100%';
            resultsDiv.style.zIndex = '1000';
            resultsDiv.style.marginTop = '5px';
            resultsDiv.style.maxHeight = '300px';
            resultsDiv.style.overflowY = 'auto';

            this.input.parentNode.style.position = 'relative';
            this.input.parentNode.appendChild(resultsDiv);
            this.resultsContainer = resultsDiv;
        } else {
            this.resultsContainer = document.getElementById(resultsId);
        }

        // Event Listeners
        this.input.addEventListener('input', (e) => this.handleInput(e));
        this.input.addEventListener('focus', (e) => this.handleInput(e));

        // Cerrar al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!this.input.contains(e.target) && !this.resultsContainer.contains(e.target)) {
                this.hideResults();
            }
        });
    },

    // Manejar entrada del usuario
    handleInput: function (e) {
        const query = e.target.value.toLowerCase().trim();

        if (query.length < 2) {
            this.hideResults();
            return;
        }

        const results = this.search(query);
        this.showResults(results);
    },

    // Algoritmo de búsqueda
    search: function (query) {
        return this.index.filter(item => {
            const titleMatch = item.title.toLowerCase().includes(query);
            const tagsMatch = item.tags.toLowerCase().includes(query);
            return titleMatch || tagsMatch;
        }).sort((a, b) => {
            // Priorizar coincidencia en título
            const aTitle = a.title.toLowerCase().includes(query);
            const bTitle = b.title.toLowerCase().includes(query);
            if (aTitle && !bTitle) return -1;
            if (!aTitle && bTitle) return 1;
            return 0;
        }).slice(0, 8); // Limitar a 8 resultados
    },

    // Mostrar resultados
    showResults: function (results) {
        if (results.length === 0) {
            this.resultsContainer.innerHTML = `
                <div class="pad-10 ta-c c-gris">
                    <small>No se encontraron resultados</small>
                </div>
            `;
        } else {
            this.resultsContainer.innerHTML = results.map(item => `
                <a href="${this.basePath}${item.url}" class="d-block p-10 link-search hover-bg-gris-c">
                    <div class="d-flex ali-center">
                        <i class="bs-cursor mr-2 c-yellow"></i>
                        <div>
                            <div class="f-w-7">${item.title}</div>
                            <small class="c-gris fz-12">${this.highlightMatch(item.tags, this.input.value)}</small>
                        </div>
                    </div>
                </a>
            `).join('');
        }

        this.resultsContainer.style.display = 'block';
    },

    // Resaltar coincidencias (simple)
    highlightMatch: function (text, query) {
        // Mostrar solo los tags relevantes
        const tags = text.split(', ');
        const relevantTags = tags.filter(tag => tag.includes(query.toLowerCase()));
        return relevantTags.slice(0, 3).join(', ');
    },

    hideResults: function () {
        this.resultsContainer.style.display = 'none';
    }
};

// Exportar para uso global
window.SearchSystem = SearchSystem;
