/**
 * Archivo de inicio de la documentación de Bosdystyle
 * Archivo de desarrollo con las tarjetas y enlaces 
 * de descarga necesarios. 
 */

(() => {

    // Inicializa la barra de navegación de Bodystyle
    BS.NavigationInit("#nav");

    // Muestra el contenido con un efecto fadeIn
    BS.fadeIn(document.getElementById("main"), 1200);

    // Inicialiiza los tips personalizados
    BS.PersonalizadoInit({ori: "disparador"})
    
    // Inicializa los tips convencionales 
    // Dynamics-Tips
    BS.ToolTipsInit()

    // Muestra tarjeta del logo de la marca Bodystyle
    document.getElementById("logo").setAttribute("data-info", `
        <div  class="card-notification-dark"> 
            <div  class="row">
                <div  class="cl-4 card-logo">
                     <img  class="img-responsive"  src="images/logo.png"  alt="Logo Bodystyle"  width="60"  height="60">
                </div>
                <div  class="cl-8">
                    <h4  class="title">Bodystyle Framework</h4>
                    <p  class="content">Librería CSS completa para construir interfaces modernas y responsivas con facilidad.</p>
                </div>
            </div>
        </div>
    `);

    /** Muestra la tarjeta que permite la descarga de Bodystyle */
    document.getElementById("descarga").setAttribute("data-info", `
        <div  class="card"> <!-- Comienza la tarjeta simple -->
            <div  class="card-simple-dark"> <!-- Tarjeta oscura -->
                <h4>Descarga de Bodystyle</h4>
                <small>v6.5.0</small>
                <p>
                    Descarga de los archivos transpilados y procesados de Bodystyle CSS y JS.
                </p> 
                <a target="_blank" href="https://mega.nz/file/8cFFjSYZ#y82eMpvPRGRoQZUA8Lktuj3oHmFVMonJAE8hgFHj1MA"  class="btn-cover-o btn-bodyui-o mar-2 bor-pill"><i class='bs-zip fz-25 c-yellow'>&nbsp;</i>Descarga</a>
            </div>
        </div>
    `);

    // Muestra la tarjeta de la descarga de la documentación
    document.getElementById("descarga_docs").setAttribute("data-info", `
        <div  class="card"> 
            <div  class="card-simple-dark"> <!-- Tarjeta oscura -->
                <h4>Documentación</h4>
                <small>v4.5.0</small>
                <p>
                    Desde este botón podrá descargar la documentación de Bodystyle
                </p> 
                <a target="_blank" href=""  class="btn-cover-o btn-bodyui-o mar-2 bor-pill"><i class='bs-zip fz-25 c-yellow'>&nbsp;</i>Descarga</a>
            </div><!-- FIN Tarjeta oscura -->
        </div>
    `);


    /** Remover publicidad del hosting */
    document.querySelectorAll("iframe").forEach(iframe => iframe.remove());

    // Remover publicidad del hosting
    document.querySelectorAll("ins").forEach(ins => ins.remove());
})()