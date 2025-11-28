const fs = require('fs');
const path = require('path');

const inputFile = '5.8.0/css/bodystyle.min.css';
const outputFile = '5.8.0/css/bodystyle.min.css';

try {
    console.log(`Reading ${inputFile}...`);
    let content = fs.readFileSync(inputFile, 'utf8');
    const originalSize = content.length;

    console.log('Minifying...');
    // Remove comments
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    // Remove newlines and tabs
    content = content.replace(/[\r\n\t]+/g, '');
    // Remove multiple spaces
    content = content.replace(/\s+/g, ' ');
    // Remove spaces around delimiters
    content = content.replace(/\s*([\{\}:;,])\s*/g, '$1');
    // Fix media queries
    content = content.replace(/and\(/g, 'and (');
    // Remove last semicolon in block
    content = content.replace(/;\}/g, '}');

    fs.writeFileSync(outputFile, content);
    
    const minifiedSize = content.length;
    const reduction = ((originalSize - minifiedSize) / originalSize * 100).toFixed(2);

    console.log(`Original size: ${originalSize} bytes`);
    console.log(`Minified size: ${minifiedSize} bytes`);
    console.log(`Reduction: ${reduction}%`);
    console.log('Done!');

} catch (err) {
    console.error('Error:', err);
    process.exit(1);
}
