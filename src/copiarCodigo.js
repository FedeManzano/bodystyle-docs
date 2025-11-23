
(() => {

    const Init = () => {
        const preElements = document.querySelectorAll("pre");
        const codigoElements = document.querySelectorAll(".codigo");

        codigoElements.forEach((cod, index) => {
            const i = index + 1;
            cod.insertAdjacentHTML('beforeend',
                `<a class="btn-copy"><i id="${i}" class="fa-solid fa-copy"></i></a>`
            );
        });

        document.querySelectorAll(".btn-copy").forEach(btn => {
            btn.addEventListener("click", (event) => {
                let boton = event.target;
                let id = boton.id;

                const parent = document.getElementById(id).parentElement;
                const pre = parent.previousElementSibling || parent.parentElement.previousElementSibling;

                if (pre) {
                    console.log("El id del elemento: " + pre.id + " " + pre.className);
                    copiarAlPortapapeles(pre.id);
                }
            });
        });
    }


    function copiarAlPortapapeles(idElemento) {
        if (idElemento === null || idElemento === undefined || idElemento === '#')
            return

        const elemento = document.getElementById(idElemento);
        if (!elemento) return;

        let texto = elemento.textContent;
        texto = texto.replace(/[0-9]+$/, '');

        // Usar la API moderna del portapapeles si está disponible
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(texto).then(() => {
                mostrarToast();
            }).catch(() => {
                // Fallback al método antiguo
                copiarConTextarea(texto);
            });
        } else {
            // Fallback para navegadores antiguos
            copiarConTextarea(texto);
        }
    }

    function copiarConTextarea(texto) {
        const aux = document.createElement("textarea");
        document.body.appendChild(aux);
        aux.value = texto;
        aux.select();
        document.execCommand("copy");
        aux.remove();
        mostrarToast();
    }

    function mostrarToast() {
        const confToast = {
            html: 'Copiado OK',
            clases: ["fd-verde", "bor-rad-10"],
            tiempo: 2000,
            cerrar: false
        };
        BS.Toast(confToast);
    }


    const Copiar = {
        Iniciar: () => Init()

    }

    window.Copiar = Copiar

})()

export default Copiar