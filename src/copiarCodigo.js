import $ from "jquery"

(() => {

    const Init = () => {
        let a = $("pre").length
        for (let i = 1; i <= a; i ++)
        {
            let cod = $(".codigo")[i-1]
            $(cod).append
            (
                `<a  class="btn-copy"><i id="${i}" class="fa-solid fa-copy"></i></a>`
            )
        }

        $(".btn-copy").on("click", (event)=>{
            let boton = event.target
            let id = boton.id
            
            var pre = $("#"+id).parent().siblings()[0]
            console.log("El id del elemento: " + pre.id + " " + pre.className)
            copiarAlPortapapeles( pre.id)
        })

    }

    
    function copiarAlPortapapeles(idElemento) {
        var aux = $("<textarea>"); // Crea un elemento input temporal
        $("body").append(aux); // Lo añade al body

        if(idElemento === null || idElemento === undefined || idElemento === '#')
            return

        let texto = $('#' + idElemento).text()
        texto = texto.replace(/[0-9]+$/,'' )
        aux.val(texto); // Obtiene el texto del elemento y lo pone en el input
        aux.select(); // Selecciona el texto
        document.execCommand("copy"); // Copia el texto al portapapeles
        aux.remove(); // Elimina el elemento temporal

        var  confToast = {
                html: 'Copiado OK',
                clases: ["fd-verde"],
                tiempo: 2000,
                cerrar: false
        }

        BS.Toast(confToast)
    }


    const Copiar = {
        Iniciar: () => Init()

    } 

    window.Copiar = Copiar

})()

export default Copiar