BS.ToolTipsInit()
BS.NavigationInit("#nav", true)
BS.PersonalizadoInit({ ori: "disparador", ele: "" })

window.onload = () => {
    setTimeout(() => {
        BS.DesactivadoInit()
    }, 100);
}



document.getElementById("descaraga_docs").setAttribute("data-info",
    `
                <div  class="card">
                    <div  class="card-simple-dark">
                        <h4>Documentación</h4>
                        <small>Versión 3.5.0</small>
                        <p>
                            Desde este enlace vamos a poder descargar la 
                            <a target="_blank" href='https://github.com/FedeManzano/bodystyle-docs' class='link'>Versión 3.5.0</a> de la documentación de <a target='_blank' href='https://github.com/FedeManzano/bodystyle' class='link'> Bodystyle 6.0.0</a>.
                            Si ya dispone de la documentación de manera local este enlace estará deshabilitado.
                        </p> 
                        <a target='_blank'  href="https://mega.nz/file/xAVDmSAb#IxB6nkPe3h4TrPF2qwETQ0cCKBS90I0DUc-4iQtii8Q"  class="btn-cover-sm-o btn-bodyui-o  bor-pill mar-2"><i class='bs-zip fz-22 c-yellow'>&nbsp;</i>Docs_v3.5.0.zip</a>
                    </div>
                </div>
            `
)

document.getElementById("descarga_lib").setAttribute("data-info",
    `
                <div  class="card">
                    <div  class="card-simple-dark">
                        <h4>Bodystyle</h4>
                        <small>Versión 6.0.0</small>
                        <p>
                            Versión transpilada y procesada de la biblioteca.
                        </p> 
                        <a target='_blank'  href="https://mega.nz/file/pVFWWBDa#cxmhYVVSguG1mPhhqUruEEKNmvXuvbYH0lWBlGxJD_s"  class="btn-cover-sm-o btn-bodyui-o  bor-pill mar-2"><i class='bs-zip fz-22 c-yellow'>&nbsp;</i>Bodystyle_v6.0.0.zip</a>
                    </div>
                </div>
            `
)

document.getElementById("autor").setAttribute("data-info",
    `
                <div  class="card">
                    <div  class="card-simple-dark ta-c">
                        <h4>Autor</h4>
                        <small>Federico Manzano</small>
                        <div class="ta-c d-flex flex-column ali-center mt-3">
                            <img src="imagenes/20191106_205049.png" height='50px' width='50px' />
                            <p>
                                Estudiante de Ingeniería Informática de la <span class="f-w-7 c-verde">Universidad Nacional de la Matanza.</span> <br>
                            </p>
                            <a target="_blank" href="https://github.com/FedeManzano" class="link">@FedeManzano</a>
                        </div>
                    </div>
                </div>
            `
)

document.getElementById("navegador").setAttribute("data-info",
    `
                <div  class="card" style="z-index: 10000">
                    <div  class="card-simple-dark ta-c">
                        <h4>Navegador</h4>
                        <small>Brave Browser</small>
                        <div class="ta-c d-flex flex-column ali-center mt-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Brave_icon_lionface.png" height='50px' width='50px' />
                            <p>
                                Navegador Recomendado para ver la documentación.
                            </p>
                            <a href="https://brave.com/"" class="link">Descargar</a>
                        </div>
                    </div>
                </div>
            `
)

document.getElementById("navegador2").setAttribute("data-info",
    `
                <div  class="card" style="z-index: 10000">
                    <div  class="card-simple-dark ta-c">
                        <h4>Navegador</h4>
                        <small>Brave Browser</small>
                        <div class="ta-c d-flex flex-column ali-center mt-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Brave_icon_lionface.png" height='50px' width='50px' />
                            <p>
                                Navegador Recomendado para ver la documentación.
                            </p>
                            <a href="https://brave.com/"" class="link">Descargar</a>
                        </div>
                    </div>
                </div>
            `
)

window.onload = () => {
    setTimeout(() => {
        document.querySelectorAll("ins").forEach(e => e.remove())
        document.querySelectorAll("iframe").forEach(e => e.remove())
    }, 100)
}
