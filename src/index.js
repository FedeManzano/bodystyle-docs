
import  "./bodystyle"
import "./cargaMenues"
import"./copiarCodigo"

window.onload = () => {
  setTimeout( () => {
    BS.DropDownInit()
    BS.CodigoHtmlInit()
    BS.CodigoJsInit()
    BS.ToolTipsInit()
    BS.NavInit(idMenu)
    BS.BotonInicioInit()
    $("#sidebar").fadeIn(1500)
    }, 50); 
}

CargarMenu.Iniciar()
Copiar.Iniciar()