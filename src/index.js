
import "./bodystyle"
import "./cargaMenues"
import "./copiarCodigo"

window.onload = () => {
  setTimeout(() => {
    BS.CodigoHtmlInit()
    BS.CommentInit()
    BS.ToolTipsInit()
    BS.SidebarDropInit({ idNav: "#nav", idSidebar: "#sidebar", submenu: idMenu })
    BS.BotonInicioInit()

    document.querySelectorAll("h1, h2, h3").forEach((e) => {
      e.classList.remove("scroll-item")
    })
    document.querySelectorAll("h1, h2, h3").forEach((e) => {
      e.classList.add("scroll-item")
    })

    let conf =
    {
      ancho: 16,
      tamFuente: 16,
      colorBorde: "bg-bodyui",
      alturaBorde: 30,
      separacion: 100,
      colorSeleccionado: "#fff",
      colorNoSeleccionado: "#ccc"
    }

    BS.ScrollSpyInit(conf)
    BS.PersonalizadoInit({ ori: "disparador", ele: "alert-op-red" })
    BS.DesactivadoInit()
    document.querySelectorAll("ins").forEach((e) => {
      e.remove()
    })
    document.querySelectorAll("iframe").forEach((e) => {
      e.remove()
    })

    BS.WavesInit()
  }, 100);
}


CargarMenu.Iniciar()
Copiar.Iniciar()

export default BS