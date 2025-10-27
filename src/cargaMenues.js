import $ from "jquery"

(() => {


    const Init = () => {
        
    $("#sidebar").html
    (
    `   <a  class="titulo c-blanco mar-2 t-may" data-target="#m1">Iniciación</a>
        <ul id="m1">
            <li><a href="../index.html">Home</a></li>
            <li><a href="get_started.html">Get Started</a></li>
            <li><a href="medidas.html" >Medidas</a></li>
            <li><a href="colores.html">Colores</a></li>
            <li><a href="tablas.html">Tablas</a></li>
            <li><a href="texto.html">Texto</a></li>
            <li><a href="opacidad.html">Opacidad</a></li>
            <li><a href="bordes.html">Bordes</a></li>
            <li><a href="overflow.html">Overflow</a></li>
        </ul>
        <a  class="titulo c-blanco t-may" data-target="#m2">CSS</a>
        <ul id="m2">
            <li><a href="botones.html">Botones</a></li>
            <li><a href="grupo_botones.html">Grupo Botones</a></li>
            <li><a href="badges.html">Badges</a></li>
            <li><a href="alertas.html">Alertas</a></li>
            <li><a href="tarjetas.html">Tarjetas</a></li>
            <li><a href="breadcrumbs.html">Breadcrumbs</a></li>
            <li><a href="colecciones.html">Colecciones</a></li>
            <li><a href="efecto3d.html">Efecto 3D</a></li>
            <li><a href="efecto_hover.html">Efecto Hover</a></li>
            <li><a href="formas.html">Formas</a></li>
        </ul>
        <a  class="titulo c-blanco t-may" data-target="#m3">Alineamiento</a>
        <ul id="m3">
            <li><a href="contenedor.html">Contenedor</a></li>
            <li><a href="helpers.html">Helpers</a></li>
            <li><a href="margin.html">Margin</a></li>
            <li><a href="padding.html">Padding</a></li>
            <li><a href="flexbox.html">Flexbox</a></li>
            <li><a href="grid.html">Grid</a></li>
            <li><a href="ancho_alto.html">Ancho y Alto</a></li>
        </ul>
        <a  class="titulo c-blanco t-may" data-target="#m4">Formularios</a>
        <ul id="m4">
            <li><a href="input.html">Input</a></li>
            <li><a href="select.html">Select</a></li>
            <li><a href="switch.html">Switch</a></li>
            <li><a href="checkbox.html">Checkbox</a></li>
            <li><a href="radio.html">Radio</a></li>
            <li><a href="formularios.html">Formularios</a></li>
        </ul>
        <a  class="titulo c-blanco t-may" data-target="#m5">JS</a>
        <ul id="m5">
            <li><a href="boton_inicio.html">Botón Inicio</a></li>
            <li><a href="colecciones_flotantes.html">Lista Fixed</a></li>
            <li><a href="dropdown.html">Dropdown</a></li>
            <li><a href="tooltips.html">ToolTips</a></li>
            <li><a href="comentarios.html">Comentarios</a></li>
            <li><a href="show_code.html">Show Code</a></li>
            <li><a href="toast.html">Toasts</a></li>
            <li><a href="modal.html">Modals</a></li>
            <li><a href="tabs.html">Tabs</a></li>
        </ul>
        <a  class="titulo c-blanco t-may" data-target="#m6">Componentes</a>
        <ul id="m6">
            <li><a href="nav.html">Nav</a></li>
            <li><a href="progressbar.html">Progressbar</a></li>
            <li><a href="preloader.html">Preloader</a></li>
        </ul>
        `

    )

    if(enlace !== null && enlace !== undefined)
    {
        $("#sidebar ul").each((n, e) => {
            $(e).children().each((n,e) => {
                let texto = $(e).text()
                if(texto === enlace)
                {
                        $(e).children().addClass("active")
                        $(e).children().append(`<i class="fa-solid fa-arrow-left pi-1">&nbsp</i>`)
                }
            })
        })
    }
    

    $(".nav-body").append
    (
        `
        <p class="nav-logo logo">
            <img src="../imagenes/20191106_205049.png">
        </p>
        <!-- LISTA Con las opciones del menú -->
        <ul class="lista d-flex ocultar-desde-medianos">
            <li><a href="https://github.com/FedeManzano/bodystyle">Repositorio</a></li>
            <li><a href="../index.html">Inicio</a></li>
        </ul>
        <a class="badge-sub com-trigger bor-pill bg-bodyui" style="margin-right: 150px"
        data-info="Descarga de los archivos procesados y transpilados de la Bodystyle, no están incluidos los archivos con el código fuente.">Descarga<span class="ocultar-desde-chicos">v4.5.0</span></a>
        `
    )

    $(".autor").html
    (
        `
        <h4>Autor</h4>
        <a href="https://github.com/FedeManzano" class="link tips-ele" target='_blank'
        data-tips="Copyright&nbsp<i class='fa-solid fa-copyright c-red'>&nbsp</i>FedericoManzano"
        data-pos='right'>Federico Manzano</a>
        `
    )

    $(".boton-descarga").html
    (
        `
        <div class="card">
            <div class="card-simple-dark">
                <h4>Descargar Bodystyle<span class="badge badge-bodyui">4.5.0</span></h4>
                <small>Versión 4.5.0</small>
                <p>
                    Con el botón que está abajo de este texto descargará
                    la versión procesada de la librería en su 
                    <a href='https://github.com/FedeManzano/bodystyle' target='_blank' class='link tips-ele '
                    data-tips="Versión procesada de Bodystyle"
                    data-pos='right'>versión 4.5.0</a>.
                </p> 
                <a target="_blank" href="https://mega.nz/file/cQMHGSDS#kK6bvOzeLMdLy15qLuqAwYaY_j_UnDWuyVAudZCYoTw" class="btn-cover-sm fd-bodyui mar-2 tips-ele bor-pill"
                data-tips="<i class='fa-solid fa-file-zipper c-orange'>&nbsp</i>bodystyle_v4.0.0_dist.zip">Descargar</a>
            </div>
        </div> 
        `
    )

    }



    const CargarMenu = {
        Iniciar: () => Init()
    }

    window.CargarMenu = CargarMenu
})()

export default CargarMenu


