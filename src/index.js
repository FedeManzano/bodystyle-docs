
import "./bodystyle"
import "./cargaMenues"
import "./copiarCodigo"

window.onload = () => {
  setTimeout( () => {
    BS.DesactivadoInit()
    BS.CodigoHtmlInit()
    BS.ToolTipsInit()
    BS.SidebarDropInit({idNav: "#nav", idSidebar: "#sidebar", submenu:idMenu})
    BS.BotonInicioInit()

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
    BS.PersonalizadoInit({ori: "disparador", ele: "alert-op-red"})
    
    $("ins").remove()
    $("iframe").remove()
    }, 100); 
}


CargarMenu.Iniciar()
Copiar.Iniciar()

export default BS