import $ from "jquery"
import "./bodystyle"
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
            <li><a href="overflow.html">Overflow<span class='badge badge-bodyui'>New</span></a></li>
        </ul>
        <a  class="titulo c-blanco t-may" data-target="#m2">CSS</a>
        <ul id="m2">
            <li><a href="botones.html">Botones</a></li>
            <li><a href="grupo_botones.html">Grupo Botones</a></li>
            <li><a href="badges.html">Badges<span class="badge badge-bodyui">New</span></a></li>
            <li><a href="etiquetas.html">Etiquetas<span class="badge badge-bodyui">New</span></a></li>
            <li><a href="solapas.html">Solapas<span class="badge badge-bodyui">New</span></a></li>
            <li><a href="compartir.html">Compartir<span class="badge badge-bodyui">New</span></a></li>
            <li><a href="mensajes.html">Mensajes<span class="badge badge-bodyui">New</span></a></li>
            <li><a href="alertas.html">Alertas</a></li>
            <li><a href="tarjetas.html">Tarjetas</a></li>
            <li><a href="breadcrumbs.html">Breadcrumbs</a></li>
            <li><a href="colecciones.html">Colecciones<span class="badge badge-bodyui">New</span></a></li>
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
            <li><a href="input_range.html">Input Range<span class='badge badge-bodyui'>New</span></a></li>
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
            <li><a href="imagenes.html">Imagenes<span class='badge badge-bodyui'>New</span></a></li>
            <li><a href="scrollspy.html">ScrollSpy<span class='badge badge-bodyui'>New</span></a></li>
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
        <p class="nav-logo logo pl-0" style="width: 75px !important; height: 75px !important;">
            <img src="../imagenes/20191106_205049.png">
        </p>
        <ul class="lista d-flex ocultar-desde-medianos">
            <li><a href="https://github.com/FedeManzano/bodystyle">Repositorio</a></li>
            <li><a href="../index.html">Inicio</a></li>
        </ul>
        <a target="_blank" href="https://mega.nz/file/ZEkV0ZQI#a0-_5aoELyOirQGbHlT7xM7a_mApM0GifHGOHAM9hH0" class='ocultar-desde-x-chicos badge-sub tips-ele bor-pill bg-bodyui pl-xs-0' style="margin-right: 150px"
        data-tips='<span><i class="fa-solid fa-book c-bodyui">&nbsp</i><span>Librería Procesada. v4.5.0'>Descarga<span class="ocultar-desde-chicos">v4.5.0</span></a>
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
        <div class="ancho-55 ancho-m-75 ancho-s-90 ancho-xs-100">
        <div class="card">
            <div class="card-simple-dark card-cover">
                <h4>Descargar Bodystyle<span class="badge badge-bodyui">4.5.0</span></h4>
                <small>Versión 4.5.0</small>
                <p>
                    Con el botón que está abajo de este texto descargará
                    la versión procesada de la librería en su 
                    <a href='https://github.com/FedeManzano/bodystyle' target='_blank' class='link tips-ele '
                    data-tips="Versión procesada de Bodystyle"
                    data-pos='right'>versión 4.5.0</a>, el segundo botón es para descargar esta misma documentación
                    para no tener que ver publicidad que el hosting introduce sin permiso.
                </p> 
                <a target="_blank" href="https://mega.nz/file/ZEkV0ZQI#a0-_5aoELyOirQGbHlT7xM7a_mApM0GifHGOHAM9hH0" class="btn-cover-sm fd-bodyui mar-2 tips-ele bor-pill"
                data-tips="<i class='fa-solid fa-file-zipper c-orange'>&nbsp</i>bodystyle_v4.5.0.zip" data-pos='right'>Descargar</a>
                <a target="_blank" href="" class="btn-cover-sm-o btn-white-o mar-1 tips-ele bor-pill"
                data-tips="<i class='fa-solid fa-file-zipper c-orange'>&nbsp</i>bs_docs_4.5.0.zip">Docs 4.5.0</a>
            </div>
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


