
import "./bodystyle"
import "./cargaMenues"
import "./copiarCodigo"

window.onload = () => {
  setTimeout( () => {
    BS.DropDownInit()
    BS.CodigoHtmlInit()
    BS.CodigoJsInit()
    BS.CodigoCssInit()
    BS.ToolTipsInit()
    BS.NavInit(idMenu)
    BS.BotonInicioInit()
    BS.CodigoCInit()
    BS.CodigoJavaInit()
    $("#sidebar").fadeIn(1500)
    }, 50); 
}


CargarMenu.Iniciar()
Copiar.Iniciar()

export default BS