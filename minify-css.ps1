# Script de Minificación de CSS
# Uso: .\minify-css.ps1 -InputFile "ruta/archivo.css" -OutputFile "ruta/archivo.min.css"

param($InputFile, $OutputFile)

if (-not $OutputFile) {
    $OutputFile = $InputFile
}

Write-Host "🔧 Minificador de CSS - Bodystyle Docs" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

# Verificar que el archivo de entrada existe
if (-not (Test-Path $InputFile)) {
    Write-Host "❌ Error: El archivo '$InputFile' no existe." -ForegroundColor Red
    exit 1
}

Write-Host "📄 Archivo de entrada: $InputFile" -ForegroundColor Green
Write-Host "💾 Archivo de salida: $OutputFile" -ForegroundColor Green
Write-Host ""

# Leer el contenido del archivo
$content = Get-Content -Path $InputFile -Raw

# Tamaño original
$originalSize = (Get-Item $InputFile).Length
Write-Host "📊 Tamaño original: $originalSize bytes" -ForegroundColor Yellow

# Minificación básica
Write-Host "⚙️  Minificando..." -ForegroundColor Cyan

# 1. Eliminar comentarios /* ... */
$content = $content -replace '/\*[\s\S]*?\*/', ''

# 2. Eliminar saltos de línea y tabulaciones
$content = $content -replace '[\r\n\t]+', ''

# 3. Eliminar espacios múltiples
$content = $content -replace '\s+', ' '

# 4. Eliminar espacios alrededor de llaves, dos puntos, punto y coma, comas
$content = $content -replace '\s*([\{\}:;,])\s*', '$1'

# 5. Restaurar espacio necesario en media queries (and (...) ) si se rompió
$content = $content -replace 'and\(', 'and ('

# 6. Eliminar punto y coma final del bloque
$content = $content -replace ';\}', '}'

# Guardar el archivo minificado
$content | Out-File -FilePath $OutputFile -Encoding UTF8 -NoNewline

# Tamaño minificado
$minifiedSize = (Get-Item $OutputFile).Length
if ($originalSize -gt 0) {
    $reduction = [math]::Round((($originalSize - $minifiedSize) / $originalSize) * 100, 2)
}
else {
    $reduction = 0
}

Write-Host ""
Write-Host "✅ Minificación completada!" -ForegroundColor Green
Write-Host "📊 Tamaño minificado: $minifiedSize bytes" -ForegroundColor Yellow
Write-Host "📉 Reducción: $reduction%" -ForegroundColor Green
Write-Host ""
