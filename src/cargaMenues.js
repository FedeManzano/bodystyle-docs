import $ from "jquery"
import "./bodystyle"

(() => {


    const Init = () => {
        
    $("#sidebar").html
    (
    `   <div class="bs-sidebar-title waves" data-target="#l1">
            <label>Inicio</label>
        </div>
        
        <div class="bs-sidebar-drop-list" id="l1">
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="get_started.html">Get Started</a></li>
                <li><a href="medidas.html">Medidas</a></li>
                <li><a href="colores.html">Colores</a></li>
            </ul>
        </div>
        <div class="bs-sidebar-title waves" data-target="#l2">
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

        <div class="bs-sidebar-title waves" data-target="#l3">
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

        <div class="bs-sidebar-title waves" data-target="#l4">
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
    

    $(".bs-nav").append
    (
        `
        <div  class="bs-nav-md align-right-list">
            <a  class="btn-menu"></a>
            <a  href="#"  class="logo-container">
                <img  src="../logo/logo.png"  alt="Foto de perfil">
            </a>
            <div  class="ocultar-desde-medianos">
                <ul>
                    <li><a  href="../index.html">Inicio</a></li>
                    <li><a  href="https://github.com/FedeManzano/bodystyle">Repositorio</a></li>
                </ul>
            </div>
            <div  class="right-content">
                <label  class="badge-mje-right badge-mje-bodyui mr-2 mb-1"><i class="fz-16 bs-tag">&nbsp;</i>v4.8.0</label>
                <a href="" class="btn-sm-o btn-white-o bor-pill">Descargar</a>
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
                <h4>Descargar Bodystyle<span class="badge badge-bodyui"><i class="bs-tag c-white">&nbsp;</i>4.8.0</span></h4>
                <small>Versión 4.8.0</small>
                <p>
                    Con el botón que está abajo de este texto descargará
                    la versión procesada de la librería en su 
                    <a href='https://github.com/FedeManzano/bodystyle' target='_blank' class='link tips-ele '
                    data-tips="Versión procesada de Bodystyle"
                    data-pos='right'>versión 4.8.0</a>, el segundo botón es para descargar esta misma documentación
                    para no tener que ver publicidad que el hosting introduce sin permiso.
                </p> 
                <a target="_blank" href="https://mega.nz/file/UZEzQI5K#9ULEwt4p7DlILAaXz8Mu5z2O-Rsgr-7V360fWUxqs58" class="btn-cover-sm fd-bodyui mar-2 disparador bor-pill"
                data-info="<i class='fa-solid fa-file-zipper c-orange'>&nbsp</i>bodystyle_v4.8.0.zip" data-pos='right'>Descargar</a>
                <a target="_blank" href="https://mega.nz/file/4c1ggChQ#uPpobno10HaNf1il6-5KQu2ZL14WxJug75dGTCr3cHo" class="btn-cover-sm-o btn-white-o mar-1 tips-ele bor-pill"
                data-tips="Descarga de esta misma documentación.">Docs 1.8.0</a>
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


