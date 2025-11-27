const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '5.8.0', 'paginas');
const sourceFile = path.join(pagesDir, 'get_started.html');

const searchFieldContent = `
        <!--Campo de busqueda-->
        <div class='input-g ancho-40 ancho-m-60 ancho-s-75 ancho-xs-90'>
            <div class="grupo">
                <span class="span-grupo fd-gris-n c-white"><i class="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" placeholder="Buscar..." id="buscador" class="fd-gris-n c-white">
            </div>
        </div>
`;

const searchListContent = `
    <!-- Lista de busqueda -->
    <div class="option-seach" id="option-seach"></div>
`;

function updatePages() {
    try {
        const files = fs.readdirSync(pagesDir);

        files.forEach(file => {
            if (path.extname(file) === '.html' && file !== 'get_started.html') {
                const filePath = path.join(pagesDir, file);
                let content = fs.readFileSync(filePath, 'utf8');
                let modified = false;

                // Insert Search Field
                if (!content.includes('id="buscador"')) {
                    const sectionTag = '<section class="pagina nav-contenido">';
                    if (content.includes(sectionTag)) {
                        content = content.replace(sectionTag, sectionTag + searchFieldContent);
                        modified = true;
                        console.log(`Added search field to ${file}`);
                    } else {
                        console.warn(`Could not find section tag in ${file}`);
                    }
                } else {
                    console.log(`Search field already exists in ${file}`);
                }

                // Insert Search List
                if (!content.includes('id="option-seach"')) {
                    const jsComment = '<!--JS';
                    if (content.includes(jsComment)) {
                        content = content.replace(jsComment, searchListContent + '\n    ' + jsComment);
                        modified = true;
                        console.log(`Added search list to ${file}`);
                    } else {
                        // Fallback: insert before body end
                        const bodyEnd = '</body>';
                        if (content.includes(bodyEnd)) {
                            content = content.replace(bodyEnd, searchListContent + '\n' + bodyEnd);
                            modified = true;
                            console.log(`Added search list (fallback) to ${file}`);
                        } else {
                            console.warn(`Could not find insertion point for search list in ${file}`);
                        }
                    }
                } else {
                    console.log(`Search list already exists in ${file}`);
                }

                if (modified) {
                    fs.writeFileSync(filePath, content, 'utf8');
                }
            }
        });
        console.log('Update complete.');
    } catch (err) {
        console.error('Error updating pages:', err);
    }
}

updatePages();
