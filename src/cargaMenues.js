import $ from "jquery"
import "./bodystyle"

(() => {


    const Init = () => {
        
    $("#sidebar").html
    (
    `   <div class="bs-sidebar-title" data-target="#l1">
            <label><i class="fa-solid fa-play fz-20 c-bodyui">&nbsp;</i>&nbsp;Iniciación</label>
        </div>
        
        <div class="bs-sidebar-drop-list" id="l1">
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="get_started.html">Get Started</a></li>
                <li><a href="medidas.html">Medidas</a></li>
                <li><a href="colores.html">Colores</a></li>
                <li><a href="tablas.html">Tablas</a></li>
                <li><a href="texto.html">Texto</a></li>
                <li><a href="opacidad.html">Opacidad</a></li>
                <li><a href="bordes.html">Bordes</a></li>
                <li><a href="overflow.html">Overflow</a></li>
                <li><a href="desactivado.html">Desactivado</a></li>
            </ul>
        </div>
        <div class="bs-sidebar-title" data-target="#l2">
            <label><i class="fa-brands fa-css3 fz-20 c-blue-s">&nbsp;</i>&nbsp;Css</label>
        </div>
        
        <div class="bs-sidebar-drop-list" id="l2">
            <ul>
                <li><a href="botones.html">Botones</a></li>
                <li><a href="grupo_botones.html">Grupo Botones</a></li>
                <li><a href="badges.html">Badges</a></li>
                <li><a href="etiquetas.html">Etiquetas</a></li>
                <li><a href="solapas.html">Solapas</a></li>
                <li><a href="compartir.html">Compartir</a></li>
                <li><a href="mensajes.html">Mensajes</a></li>
                <li><a href="iconos.html">Iconos</a></li>
                <li><a href="alertas.html">Alertas</a></li>
                <li><a href="tarjetas.html">Tarjetas</a></li>
                <li><a href="breadcrumbs.html">Breadcrumbs</a></li>
                <li><a href="colecciones.html">Colecciones</a></li>
                <li><a href="efecto3d.html">Efecto 3D</a></li>
                <li><a href="efecto_hover.html">Efecto Hover</a></li>
                <li><a href="formas.html">Formas</a></li>
            </ul>
        </div>

        <div class="bs-sidebar-title" data-target="#l3">
            <label><i class="fa-solid fa-boxes-stacked fz-20 c-grey-s">&nbsp;</i>&nbsp;Alineamiento</label>
        </div>
   
        <div class="bs-sidebar-drop-list" id="l3">
            <ul>
                <li><a href="contenedor.html">Contenedor</a></li>
                <li><a href="helpers.html">Helpers</a></li>
                <li><a href="margin.html">Margin</a></li>
                <li><a href="padding.html">Padding</a></li>
                <li><a href="flexbox.html">Flexbox</a></li>
                <li><a href="grid.html">Grid</a></li>
                <li><a href="ancho_alto.html">Ancho y Alto</a></li>
            </ul>
        </div>

        <div class="bs-sidebar-title" data-target="#l4">
            <label><i class="fa-solid fa-envelope-open-text fz-20 c-orange">&nbsp;</i>&nbsp;Formularios</label>
        </div>
   
        <div class="bs-sidebar-drop-list" id="l4">
            <ul>
                <li><a href="input.html">Input</a></li>
                <li><a href="grupos_form.html">Grupos Form</a></li>
                <li><a href="input_range.html">Input Range</a></li>
                <li><a href="select.html">Select</a></li>
                <li><a href="checkbox.html">Checkbox</a></li>
                <li><a href="radio.html">Radio</a></li>
                <li><a href="switch.html">Switch</a></li>
                <li><a href="input_file.html">Input File</a></li>
                <li><a href="formularios.html">Formularios</a></li>
            </ul>
        </div>

        <div class="bs-sidebar-title" data-target="#l5">
            <label><i class="fa-brands fa-square-js fz-20 c-yellow"></i>&nbsp;Js</label>
        </div>
        
        <div class="bs-sidebar-drop-list" id="l5">
            <ul>
                <li><a href="modulos.html">Módulos</a></li>
                <li><a href="gestion_errores.html">Gestion Errores</a></li>
                <li><a href="auto_iniciacion.html">Auto Iniciación</a></li>
                <li><a href="boton_inicio.html">Botón Inicio</a></li>
                <li><a href="modal.html">Modales</a></li>
                <li><a href="tooltips.html">ToolTips</a></li>
                <li><a href="comentarios.html">Comentarios</a></li>
                <li><a href="dropdown.html">Dropdown</a></li>
                <li><a href="personalizados.html">Tips Propios</a></li>
                <li><a href="colecciones_flotantes.html">Lista Fixed</a></li>
                <li><a href="scrollspy.html">ScrollSpy</a></li>
                <li><a href="imagenes.html">Imagenes</a></li>
                <li><a href="tabs.html">Tabs</a></li>
                <li><a href="show_code.html">Show Code</a></li>
                <li><a href="toast.html">Toasts</a></li>
                <li><a href="waves.html">Waves</a></li>
            </ul>
        </div>

        <div class="bs-sidebar-title" data-target="#l6">
            <label><i class="fa-solid fa-map-location-dot fz-20 c-green">&nbsp;</i>&nbsp;Navegación</label>
        </div>
        
        <div class="bs-sidebar-drop-list" id="l6">
            <ul>
                <li><a href="nav.html">Nav</a></li>
                <li><a href="sidebar.html">Sidebar</a></li>
                <li><a href="sidebar_drop.html">Sidebar Drop</a></li>
                <li><a href="progressbar.html">Progress Bar</a></li>
                <li><a href="preloader.html">Preloader</a></li>
            </ul>
        </div>

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
    

    $("#nav").append
    (
        `
        <div  class="bs-nav-md align-right-list">
            <a  class="btn-menu"></a>
            <a  href="#"  class="logo-container">
                <img class='bor-rad-por-50' src="../imagenes/20191106_205049.png"  alt="Foto de perfil">
            </a>
            <div  class="ocultar-desde-medianos">
                <ul>
                    <li><a  href="../index.html">Inicio</a></li>
                    <li><a  href="https://github.com/FedeManzano/bodystyle">Repositorio</a></li>
                </ul>
            </div>
            <div  class="right-content">
                <label  class="badge-mje-right badge-mje-bodyui mr-2 mb-1"><i class="fz-16 bs-tag">&nbsp;</i>v5.0.0</label>
                <a target="_blank" href="https://mega.nz/file/UQk3WQhS#e_TBHmfNXsHuJzE9rxir387MSVM_NFv8SdEZe1VAlZI" class="btn-sm-o btn-white-o bor-pill disparador" data-info="Versión Transpilada y procesada de bodystyle 5.0.0">Descargar</a>
            </div>
        </div>
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
                <h4>Descargar Bodystyle<span class="badge badge-bodyui"><i class="bs-tag c-white">&nbsp;</i>5.0.0</span></h4>
                <small>Versión 5.0.0</small>
                <p>
                    Con el botón que está abajo de este texto descargará
                    la versión procesada de la librería en su 
                    <a href='https://github.com/FedeManzano/bodystyle' target='_blank' class='link tips-ele '
                    data-tips="Versión procesada de Bodystyle"
                    data-pos='right'>versión 5.0.0</a>, el segundo botón es para descargar esta misma documentación
                    para no tener que ver publicidad que el hosting introduce sin permiso.
                </p> 
                <a target="_blank" href="https://mega.nz/file/UQk3WQhS#e_TBHmfNXsHuJzE9rxir387MSVM_NFv8SdEZe1VAlZI" class="btn-cover fd-bodyui mar-2 disparador bor-pill"
                data-info="<i class='fa-solid fa-file-zipper c-orange'>&nbsp</i>bodystyle_v5.0.0.zip" data-pos='right'>Descargar</a>
                <a target="_blank" class="desactivado btn-cover fd-white mar-1 com-trigger bor-pill"
                data-info="Descarga de esta misma documentación, si ya la posee en el ambito local este botón estará deshabilitado.">Docs 2.0.0</a>
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


