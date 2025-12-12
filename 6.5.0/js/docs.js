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
            <label>Inicio</label>
        </div>
        <div class="bs-sidebar-drop-list" id="l1">
            <ul>
                <li><a href="">Home</a></li>
                    <li><a href="">Perfiles</a></li>
                    <li><a href="">Estadísticas</a></li>
                    <li><a href="">Correos</a></li>
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
                    <img src="../images/logo_bodystyle.svg" alt="Foto de perfil">
                </a>

                <div class="ocultar-desde-medianos">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Galería</a></li>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sit aliquam aspernatur quas?
                    Voluptas aspernatur excepturi quas, delectus fugiat ut, minus, sapiente atque voluptatum magnam illo
                    explicabo ab illum ea.</p>
        </div>
        <div>
            <a href="#" class="btn-lg-o btn-bodyui-o bor-pill tips-ele" data-tips="Descarga del documento." data-pos="right"><i class="bs-download fz-28">&nbsp;</i>Descargar</a>
        </div>`

    document.getElementById("autor_content").innerHTML =
        `
        <div class="f-flex just-center">
            <h6 class="ta-c fz-18">
                Con mucho <i class="bs-heart c-red fz-20 mt-1">&nbsp;</i>
                <a href="https://github.com/FedeManzano" target="_blank" class="link">Federico Manzano</a>
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
        InitScrollSpyLight()
    }


    // Cargar el tema guardado al iniciar la página
    document.addEventListener('DOMContentLoaded', function () {
        const savedTheme = localStorage.getItem('theme');
        const switchElement = document.getElementById('sw');

        // Si hay un tema guardado, aplicarlo
        if (savedTheme === 'dark') {
            LoadThemeDark()
            switchElement.checked = true;
        } else {
            LoadThemeLight()
            switchElement.checked = false;
        }
    });

    // Guardar la preferencia cuando cambia el switch
    document.getElementById("sw").addEventListener("change", function () {
        if (this.checked) {
            LoadThemeDark()
            localStorage.setItem('theme', 'dark'); // Guardar en localStorage
        } else {
            LoadThemeLight()
            localStorage.setItem('theme', 'light'); // Guardar en localStorage
        }
    });
})()


