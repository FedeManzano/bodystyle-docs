
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