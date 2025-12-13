(function () {

    
    let indexPre = 1;
    document.querySelectorAll("pre").forEach(pre => {
        pre.id = "c" + indexPre;
        indexPre++;
    })

    document.querySelectorAll(".btn-copy").forEach(btn => {
        btn.classList.add("tips-ele");
        btn.dataset.tips = "Copy";
        btn.dataset.pos = "top";
    })

    document.querySelectorAll(".btn-copy").forEach(btn => {
        btn.addEventListener("click", (event) => {
            let boton = event.target;
            let pre = boton.closest("label").nextElementSibling;
            if (pre) {
                copiarAlPortapapeles(pre.id);
            }
        });
    });


    function copiarAlPortapapeles(idElemento) {
        if (idElemento === null || idElemento === undefined || idElemento === '#')
            return

        const elemento = document.getElementById(idElemento);
        if (!elemento) return;

        let texto = elemento.textContent;
        texto = texto.replace(/[0-9]+$/, '');

        // Usar la API moderna del portapapeles si está disponible
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(texto).then(() => {
                mostrarToast();
            }).catch(() => {
                // Fallback al método antiguo
                copiarConTextarea(texto);
            });
        } else {
            // Fallback para navegadores antiguos
            copiarConTextarea(texto);
        }
    }

    function copiarConTextarea(texto) {
        const aux = document.createElement("textarea");
        document.body.appendChild(aux);
        aux.value = texto;
        aux.select();
        document.execCommand("copy");
        aux.remove();
        mostrarToast();
    }

    function mostrarToast() {
        const confToast = {
            html: 'Copiado OK',
            clases: ["fd-verde", "bor-rad-10"],
            tiempo: 2000,
            cerrar: false
        };
        BS.Toast(confToast);
    }


    document.querySelectorAll("h1, h2, h3").forEach((element) => {
        if (!element.id || element.id === "" || element.id === undefined) {
            return
        }

        let icono = document.createElement("i")
        let enlace = document.createElement("a")
        enlace.href = "#" + element.id
        enlace.classList.add("heading-link-icon")
        enlace.appendChild(icono)
        element.appendChild(enlace)

        icono.classList.add("bs-link-3")
        icono.classList.add("fz-25")
        icono.classList.add("c-yellow")
        icono.style.cursor = "pointer"
        icono.style.fontWeight = "bold"
        icono.style.opacity = "0.3"
        icono.style.transition = "opacity 0.3s ease"
        icono.style.marginLeft = "10px"
        icono.dataset.info = "Enlace que permite navegar a la sección correspondiente"
        icono.dataset.pos = "right"
        icono.classList.add("com-trigger")

        icono.addEventListener("mouseenter", () => {
            icono.style.opacity = "1"
        })

        icono.addEventListener("mouseleave", () => {
            icono.style.opacity = "0.3"
        })
    })


    /**
     * Carga la barra de navegación principal
     */
    document.getElementById("sidebar").innerHTML =
        `
        <div class="bs-sidebar-title" data-target="#l1">
            <label><i class="bs-play c-bodyui fz-20">&nbsp;</i>Inicio</label>
        </div>
        <div class="bs-sidebar-drop-list" id="l1">
            <ul>
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="get_started.html">Get Started</a></li>
                    <li><a href="medidas.html">Medidas</a></li>
                    <li><a href="colores.html">Colores</a></li>
                    <li><a href="">Tablas</a></li>
                    <li><a href="">Tablas</a></li>
                </ul>
            </div>
            <div class="bs-sidebar-title" data-target="#l2">
                <label>Repositorios</label>
            </div>
            <div class="bs-sidebar-drop-list" id="l2">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Perfiles</a></li>
                    <li><a href="">Estadísticas</a></li>
                <li><a href="">Correos</a></li>
            </ul>
        </div>
        <div class="bs-sidebar-title" data-target="#l3">
            <label>Archivos</label>
        </div>
        <div class="bs-sidebar-drop-list" id="l3">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Perfiles</a></li>
                <li><a href="">Estadísticas</a></li>
                <li><a href="">Correos</a></li>
            </ul>
        </div>
        <div class="bs-sidebar-title" data-target="#l4">
            <label>Cuentas</label>
        </div>
        <div class="bs-sidebar-drop-list" id="l4">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Perfiles</a></li>
                <li><a href="">Estadísticas</a></li>
                <li><a href="">Correos</a></li>
            </ul>
        </div>
        `

    /**
     * Carga la barra de navegación lateral (sidebar)
     */
    document.getElementById("nav").innerHTML =
        `<div class="bs-nav-md align-left-list">
                <a class="btn-menu"></a>

                <a href="#" class="logo-container">
                    <img id="logo_marca" class="disparador" data-info="" class="bor-rad-por-50" src="../images/logo_bodystyle.svg" alt="Foto de perfil">
                </a>

                <div class="ocultar-desde-medianos">
                    <ul>
                        <li><a href="../index.html">Inicio</a></li>
                        <li><a href="https://github.com/FedeManzano/bodystyle">Repositorio</a></li>
                    </ul>
                </div>
                <div class="right-content">
                <a href="#" class="com-trigger" data-info="Botón que permite descargar el documento"><i class="bs-download fz-30 c-bodyui mr-2"></i></a>
                    <div class="switch-grupo" data-info="Switch que permite cambiar el tema de la página light / dark">
                        <input id="sw" type="checkbox" name="sw_1">
                        <label id="lsw" for="sw" class="switch-rojo com-trigger" data-info="Switch que permite cambiar el tema de la página light / dark"></label>
                    </div>

                </div>
            </div>
        `


    document.getElementById("info_general").innerHTML =
        `<div class="alert">
            <h4 class="c-blue-s"><i class=" bs-info c-blue-s fz-28">&nbsp;</i>Información</h4>
            <p>
                Desde el botón que se encuentra abajo de esta alerta, puedes descargar la biblioteca Bodystyle en su <span class="c-red"><i class="bs-tags fz-14">&nbsp;</i>versión 6.5.0</span> 
                con los archivos procesados y transpilados. <br>
                Si lo que está buscando es el codigo fuente, puede encontrarlo en el repositorio oficial de
                <a class="link" href="https://github.com/FedeManzano/bodystyle" target="_blank">GitHub</a>.
            </p>
        </div>
        <div>
            <a href="#" class="btn-lg-o btn-bodyui-o bor-pill tips-ele" data-tips="Descarga de la biblioteca." data-pos="right"><i class="bs-download fz-28">&nbsp;</i>Descargar</a>
        </div>`

    document.getElementById("autor_content").innerHTML =
        `
        <div class="f-flex just-center">
            <h6 class="ta-c fz-18">
                Con mucho <i class="bs-heart c-red fz-20 mt-1">&nbsp;</i>
                <a id="autor_enlace" href="https://github.com/FedeManzano" target="_blank" class="link disparador" data-info="">Federico Manzano</a>
            </h6>
        </div>`

    const InitScrollSpyDark = () => {
        let conf = {
            ancho: 15, // Ancho en porcentaje del scrollspy
            tamFuente: 17, // Tamaño de la fuenta
            colorBorde: "fd-bodyui", // color del borde
            alturaBorde: 30, // Altura del elemento dinámico borde
            separacion: 100, // Separación con respecto al inicio de la pantalla propiedad TOP
            colorSeleccionado: "#fff", // Color del enlace seleccionado
            colorNoSeleccionado: "#ccc" // Color del enlace no seleccionado
        }

        // Inicialización con la conf
        BS.ScrollSpyInit(conf)

        // Agregar enlaces a los títulos DESPUÉS del ScrollSpy
        // addHeadingLinks()
    }

    const InitScrollSpyLight = () => {
        let conf = {
            ancho: 15, // Ancho en porcentaje del scrollspy
            tamFuente: 17, // Tamaño de la fuenta
            colorBorde: "fd-bodyui", // color del borde
            alturaBorde: 30, // Altura del elemento dinámico borde
            separacion: 100, // Separación con respecto al inicio de la pantalla propiedad TOP
            colorSeleccionado: "#000", // Color del enlace seleccionado
            colorNoSeleccionado: "#ccc" // Color del enlace no seleccionado
        }

        // Inicialización con la conf
        BS.ScrollSpyInit(conf)

        // Agregar enlaces a los títulos DESPUÉS del ScrollSpy
        //        addHeadingLinks()
    }

    const LoadThemeDark = () => {
        document.body.classList.add('theme-dark');
        document.getElementById("sidebar").classList.remove("bs-sidebar-drop-light")
        document.getElementById("sidebar").classList.add("bs-sidebar-drop-dark")
        document.querySelector("html, body").style.backgroundColor = "#1a1a1a";
        document.querySelectorAll("table").forEach((table) => {
            table.classList.add("table-dark")
        })
        let spanBusqueda = document.getElementById("span_buscador");
        let inputBusqueda = document.getElementById("buscador");

        if(spanBusqueda && inputBusqueda) {
            spanBusqueda.classList.add("c-white");
            spanBusqueda.classList.add("fd-bodyui");
            inputBusqueda.classList.add("c-white");
            inputBusqueda.classList.add("fd-gris-n");
        }
        InitScrollSpyDark()
    }

    const LoadThemeLight = () => {
        document.body.classList.remove('theme-dark');
        document.getElementById("sidebar").classList.remove("bs-sidebar-drop-dark")
        document.getElementById("sidebar").classList.add("bs-sidebar-drop-light")
        document.querySelector("html, body").style.backgroundColor = "#fff";
        document.querySelectorAll("table").forEach((table) => {
            table.classList.remove("table-dark")
        })

        let spanBusqueda = document.getElementById("span_buscador");
        let inputBusqueda = document.getElementById("buscador");

        if(spanBusqueda && inputBusqueda) {
            spanBusqueda.classList.remove("c-white");
            spanBusqueda.classList.remove("fd-bodyui");
            inputBusqueda.classList.remove("c-white");
            inputBusqueda.classList.remove("fd-gris-n");
        }

        InitScrollSpyLight()
    }


    // Cargar el tema guardado al iniciar la página
    document.addEventListener('DOMContentLoaded', function () {
        
        const savedTheme = localStorage.getItem('theme') || 'dark'; // Por defecto: dark
        const switchElement = document.getElementById('sw');

        // Aplicar el tema guardado o dark por defecto
        if (savedTheme === 'dark') {
            LoadThemeDark()
            switchElement.checked = false;
        } else {
            LoadThemeLight()
            switchElement.checked = true;
        }
    });

    // Guardar la preferencia cuando cambia el switch
    document.getElementById("sw").addEventListener("change", function () {
        if (this.checked) {
            LoadThemeLight()
            localStorage.setItem('theme', 'light'); // Guardar en localStorage
        } else {
            LoadThemeDark()
            localStorage.setItem('theme', 'dark'); // Guardar en localStorage
        }
    });

    let info_autor = 
    `
    <div class="card"> <!-- Comienza la tarjeta simple -->
        <div  class="card-simple-dark">
            <h4>Autor</h4>
            <small class="mb-3">Federico Manzano</small>
           
            <div class="img-display-128 m-a pt-1">
                <img class="img-responsive bor-rad-por-50" src="../images/perfil.png" alt="Foto de perfil">
            </div>
            <p>
               Federico Manzano es un desarrollador web apasionado por crear soluciones innovadoras y eficientes. 
               Con experiencia en diversas tecnologías, se especializa en el desarrollo front-end y back-end, 
               siempre buscando mejorar la experiencia del usuario a través de interfaces intuitivas y funcionales.
            </p> 
            
        </div>
    </div>
    `

    document.getElementById("logo_marca").dataset.info = info_autor;
    document.getElementById("autor_enlace").dataset.info = info_autor;



    const parametrosBusqueda = [
        { 
            nombre: "GetStarted", 
            enlace: "get_started.html",
            tags: ["inicialización", "comenzar", "empezar", "setup", "instalación", "start"] 
        },
        {
            nombre: "Medidas", 
            enlace: "medidas.html",
            tags: ["breakpoints", "medidas", "responsive", "adaptativo", "diseño", "design", "responsive design" ]
        },
        {
            nombre: "Colores", 
            enlace: "colores.html",
            tags: ["colores", "fondos", "background", "paleta", "colors", "palette" ]
        }
    ]

    let ul = document.createElement("ul");
    let lista = document.getElementById("lista-busqueda");
    lista.appendChild(ul);
    let indexEnlaceSeleccionado = -1;

    const PosicionarListaBusqueda =  () => {
        let buscador = document.getElementById("buscador");
        
        if(!buscador) return;
        let offsetLeft = buscador.getBoundingClientRect().left;
        let offsetTop = buscador.getBoundingClientRect().top;

        let lista = document.getElementById("lista-busqueda");

        lista.style.left = (offsetLeft - 75) + "px";
        lista.style.top = (offsetTop + buscador.offsetHeight + 10) + "px";
    }


    const AparecerListaBusqueda = () => {
        let lista = document.getElementById("lista-busqueda");
        lista.style.display = "block";
    }

    const DesaparecerListaBusqueda = () => {
        let lista = document.getElementById("lista-busqueda");
        lista.style.display = "none";
    }

    const LimpiarListaBusqueda = () => {
        let lista = document.getElementById("lista-busqueda");
        lista.children[0].innerHTML = "";
        indexEnlaceSeleccionado = -1;
    }

    

    document.getElementById("buscador").addEventListener("keydown", (evento) => {
        let lista = document.getElementById("lista-busqueda");
        let enlaces = lista.querySelectorAll("a");
        
        if (evento.key === "ArrowDown") {
            evento.preventDefault();
            indexEnlaceSeleccionado++;
            if (indexEnlaceSeleccionado >= enlaces.length) {
                indexEnlaceSeleccionado = 0;
            }
            ActualizarSeleccion(enlaces);
        } 
        else if (evento.key === "ArrowUp") {
            evento.preventDefault();
            indexEnlaceSeleccionado--;
            if (indexEnlaceSeleccionado < 0) {
                indexEnlaceSeleccionado = enlaces.length - 1;
            }
            ActualizarSeleccion(enlaces);
        }
        else if (evento.key === "Enter") {
            evento.preventDefault();
            if (indexEnlaceSeleccionado >= 0 && indexEnlaceSeleccionado < enlaces.length) {
                window.location.href = enlaces[indexEnlaceSeleccionado].href;
            }
        }
    });

    const ActualizarSeleccion = (enlaces) => {
        enlaces.forEach((enlace, index) => {
            if (index === indexEnlaceSeleccionado) {
                enlace.style.backgroundColor = "#c1aaaaff";
                enlace.style.cursor = "pointer";
                enlace.focus();
            } else {
                enlace.style.backgroundColor = "";
            }
        });
    };

    

    const RealizarBusqueda = (termino) => {
        PosicionarListaBusqueda()
        let lista = document.getElementById("lista-busqueda");
        parametrosBusqueda.forEach(param => {
            param.tags.forEach(tag => {
                if(tag.toLowerCase().includes(termino.toLowerCase())) {
                    
                    let busquedaExistente = false;
                    lista.querySelector("ul")
                    .querySelectorAll("li").forEach(li => {
                        if(li.querySelector("a").textContent === param.nombre) {
                            busquedaExistente = true;
                        }   
                    })

                    if(busquedaExistente) return;

                    
                    let li = document.createElement("li");
                    let a = document.createElement("a");
                    a.href = param.enlace;
                    a.textContent = param.nombre;
                    a.addEventListener("click", (e) => {
                        e.preventDefault();
                        window.location.href = param.enlace;
                    });
                    li.appendChild(a);
                    lista.children[0].appendChild(li);
                    AparecerListaBusqueda();
                }
            })
        })
    }

    document.getElementById("buscador").addEventListener("focus", (evento) => {
        let buscador = evento.target;
        let lista = document.getElementById("lista-busqueda");
        if(buscador.value.trim() === "") {  
            lista.style.display = "none";
            return;
        } 
        //LimpiarListaBusqueda();
        RealizarBusqueda(buscador.value.trim());
    });

    document.getElementById("buscador").addEventListener("input", (evento) => {
        let buscador = evento.target;
        let termino = buscador.value.trim();
        LimpiarListaBusqueda(); 
        if(termino === "") {  
            DesaparecerListaBusqueda();
            return;
        }               

        RealizarBusqueda(termino);              
    });
})()


