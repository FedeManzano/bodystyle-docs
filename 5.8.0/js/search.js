(function () {
    const indicesBusqueda = [
        {
            title: "Get Started",
            url: "get_started.html",
            tags: [
                "inicio",
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
            ]
        },
        {
            title: "Grupos Botones",
            url: "grupos_botones.html",
            tags: [
                "grupos",
                "botones",
                "grupos Botones",
                "button Group",
                "group"
            ]
        },
    ]

    let buscador = {
        campo: document.getElementById("buscador"),
        option: document.getElementById("option-seach")
    }

    const Posicionar = () => {
        let posBuscador = buscador.campo.getBoundingClientRect()
        buscador.option.style.top = (posBuscador.top + posBuscador.height + 10) + "px"
        buscador.option.style.left = posBuscador.left + "px"
    }

    const Init = () => {
        Posicionar()
        buscador.campo.addEventListener("input", Search)
        buscador.campo.addEventListener("blur", () => {
            buscador.option.style.display = "none"
        })

        buscador.campo.addEventListener("focus", () => {
            buscador.option.style.display = "none"
        })
    }


    const Search = () => {
        indicesBusqueda.forEach(element => {
            if (buscador.campo.value !== "") {
                element.tags.forEach(tag => {
                    tag = tag.toLowerCase()
                    let valor = buscador.campo.value.toLowerCase()
                    if (tag.includes(valor)) {
                        if (!ExisteOpcion(element.title, buscador)) {
                            buscador.option.style.display = "block"
                            buscador.option.innerHTML += `<li><a href="${element.url}">${element.title}</a></li>`
                        }
                    }
                });
            } else {
                buscador.option.innerHTML = ""
                buscador.option.style.display = "none"
            }
        });
    }

    const ExisteOpcion = (tag, buscador) => {
        let li = buscador.option.querySelectorAll(`li`)
        existe = false
        li.forEach(l => {
            if (l.textContent === tag) {
                existe = true
            }
        });

        return existe
    }

    Init()
})()
