
import "./bodystyle"
import "./cargaMenues"
import "./copiarCodigo"

window.onload = () => {
  setTimeout( () => {
    BS.CodigoHtmlInit()
    BS.ToolTipsInit()
    BS.NavInit(idMenu)
    BS.BotonInicioInit()
    $("#sidebar").fadeIn(1500)

    $("h1, h2, h3").removeClass("scroll-item")
    $("h1, h2, h3").addClass("scroll-item")

    let conf =
    {
      ancho : 16, 
      tamFuente : 16, 
      colorBorde : "bg-bodyui",
      alturaBorde : 30, 
      separacion : 100, 
      colorSeleccionado : "#fff", 
      colorNoSeleccionado : "#ccc"
    } 

    BS.ScrollSpyInit(conf)
    }, 50); 
}


CargarMenu.Iniciar()
Copiar.Iniciar()

export default BS