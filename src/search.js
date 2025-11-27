const indicesBusqueda = [
    {
        title: "Home",
        url: "../index.html",
        tags: [
            "inicio",
            "index",
            "home",
            "principal",
            "portada"
        ]
    },
    {
        title: "Get Started",
        url: "get_started.html",
        tags: [
            "empezar",
            "guia",
            "introduccion",
            "comienzo"
        ]
    },
    {
        title: "Botones",
        url: "botones.html",
        tags: [
            "botones",
            "boton",
            "button",
            "buttons",
            "css"
        ]
    },
    {
        title: "Grupos Botones",
        url: "grupo_botones.html",
        tags: [
            "grupos",
            "botones",
            "grupos botones",
            "button group",
            "group",
            "css"
        ]
    },

    {
        title: "Grilla",
        url: "grid.html",
        tags: [
            "alineamieto",
            "grid",
            "grilla",
            "flex",
            "flexbox",
            "container",
            "row",
            "fila",
            "column",
            "columna",
            "col",
            "columna"
        ]
    },
    {
        title: "Flexbox",
        url: "flexbox.html",
        tags: [
            "alineamieto",
            "grid",
            "grilla",
            "flex",
            "flexbox",
            "container",
            "responsive",
            "row",
            "fila",
            "column",
            "columna",
            "col",
            "columna"
        ]
    },

    {
        title: "Contenedor",
        url: "contenedor.html",
        tags: [
            "alineamiento",
            "grid",
            "grilla",
            "flex",
            "flexbox",
            "container",
            "responsive",
            "row",
            "fila",
            "column",
            "columna",
            "col",
            "columna"
        ]
    },

    {
        title: "Margin",
        url: "margin.html",
        tags: [
            "margin",
            "margen",
            "padding",
            "espaciado",
            "espaciado interno",
            "espaciado externo",
            "responsive",
            "flexbox",
            "alineamiento"
        ]
    },
    {
        title: "Padding",
        url: "padding.html",
        tags: [
            "margin",
            "margen",
            "padding",
            "espaciado",
            "espaciado interno",
            "espaciado externo",
            "responsive",
            "flexbox",
            "alineamiento"
        ]
    },
    {
        title: "Ancho y Alto",
        url: "ancho_alto.html",
        tags: [
            "ancho",
            "alto",
            "width",
            "height",
            "responsive",
            "flexbox",
            "grid",
            "grilla",
            "alineamiento"
        ]
    },
    {
        title: "Helpers",
        url: "helpers.html",
        tags: [
            "ayudantes",
            "helpers",
            "responsive",
            "screen",
            "responsive",
            "flexbox",
            "grid",
            "grilla",
            "alineamiento"
        ]
    },
    {
        title: "Badges",
        url: "badges.html",
        tags: [
            "badges",
            "badge",
            "botones",
            "badge simple",
            "css"
        ]
    },
    {
        title: "Mensajes",
        url: "mensajes.html",
        tags: [
            "mensajes",
            "message",
            "botones",
            "badge",
            "alert",
            "alerta",
            "css"
        ]
    },
    {
        title: "Solapas",
        url: "solapas.html",
        tags: [
            "solapas",
            "flap",
            "flaps",
            "solapa",
            "badge",
            "css"
        ]
    },
    {
        title: "Compartir",
        url: "compartir.html",
        tags: [
            "compartir",
            "badge",
            "badges",
            "share",
            "button",
            "boton",
            "css",
            "buttons",
            "botones"
        ]
    },
]

let buscador = {
    campo: null,
    option: null
}

const Posicionar = () => {
    if (!buscador.campo) return;
    let posBuscador = buscador.campo.getBoundingClientRect()
    buscador.option.style.position = 'absolute'
    buscador.option.style.top = (posBuscador.top + posBuscador.height + 10) + "px"
    buscador.option.style.left = posBuscador.left + "px"
}

const Init = () => {
    // Obtener elementos del DOM cuando Init se ejecuta
    buscador.campo = document.getElementById("buscador");
    buscador.option = document.getElementById("option-seach");

    // Verificar que los elementos existen
    if (!buscador.campo || !buscador.option) {
        console.warn("Elementos de búsqueda no encontrados en el DOM");
        return;
    }

    // Configurar estilos iniciales del contenedor de resultados
    buscador.option.style.position = 'absolute';
    buscador.option.style.display = 'none';
    buscador.option.style.zIndex = '100000';

    Posicionar()
    buscador.campo.addEventListener("input", Search)
    buscador.campo.addEventListener("blur", () => {
        setTimeout(() => {
            buscador.option.style.display = "none"
        }, 200)
    })

    buscador.campo.addEventListener("focus", () => {
        if (buscador.campo.value.trim().length >= 2) {
            Search()
        }
    })
}

const Search = () => {
    if (!buscador.campo || !buscador.option) return;

    // Limpiar resultados previos
    buscador.option.innerHTML = "";

    const valor = buscador.campo.value.toLowerCase().trim();

    if (valor === "") {
        buscador.option.style.display = "none";
        return;
    }

    let hayResultados = false;

    indicesBusqueda.forEach(element => {
        element.tags.forEach(tag => {
            const tagLower = tag.toLowerCase();
            if (tagLower.includes(valor)) {
                if (!ExisteOpcion(element.title, buscador)) {
                    hayResultados = true;
                    buscador.option.innerHTML += `<a href="${element.url}">${element.title}</a>`;
                }
            }
        });
    });

    buscador.option.style.display = hayResultados ? "block" : "none";
}

const ExisteOpcion = (title, buscador) => {
    if (!buscador.option) return false;

    const enlaces = buscador.option.querySelectorAll('a');
    let existe = false;

    enlaces.forEach(enlace => {
        if (enlace.textContent === title) {
            existe = true;
        }
    });

    return existe;
}

const Busqueda = {
    Init: () => Init()
}

window.Busqueda = Busqueda

export default Busqueda
