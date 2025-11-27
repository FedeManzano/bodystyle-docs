# Script de Minificación de JavaScript
# Uso: .\minify-js.ps1 -InputFile "ruta/archivo.js" -OutputFile "ruta/archivo.min.js"

param(
    [Parameter(Mandatory=$false)]
    [string]$InputFile = "5.8.0\js\index.js",
    
    [Parameter(Mandatory=$false)]
    [string]$OutputFile = "5.8.0\js\index.min.js"
)

Write-Host "🔧 Minificador de JavaScript - Bodystyle Docs" -ForegroundColor Cyan
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

# 1. Eliminar comentarios de una línea
$content = $content -replace '//.*$', ''

# 2. Eliminar comentarios multilínea
$content = $content -replace '/\*[\s\S]*?\*/', ''

# 3. Eliminar espacios en blanco al inicio y final de líneas
$content = $content -replace '^\s+', '' -replace '\s+$', ''

# 4. Eliminar líneas vacías
$content = $content -replace '(?m)^\s*\r?\n', ''

# 5. Eliminar espacios múltiples
$content = $content -replace '\s+', ' '

# 6. Eliminar espacios alrededor de operadores y símbolos
$content = $content -replace '\s*([{};,()=+\-*/<>!&|])\s*', '$1'

# 7. Eliminar espacios después de palabras clave
$content = $content -replace '(if|for|while|function|return|var|let|const)\s+\(', '$1('

# 8. Comprimir aún más
$content = $content.Trim()

# Guardar el archivo minificado
$content | Out-File -FilePath $OutputFile -Encoding UTF8 -NoNewline

# Tamaño minificado
$minifiedSize = (Get-Item $OutputFile).Length
$reduction = [math]::Round((($originalSize - $minifiedSize) / $originalSize) * 100, 2)

Write-Host ""
Write-Host "✅ Minificación completada!" -ForegroundColor Green
Write-Host "📊 Tamaño minificado: $minifiedSize bytes" -ForegroundColor Yellow
Write-Host "📉 Reducción: $reduction%" -ForegroundColor Green
Write-Host ""
Write-Host "💡 Archivo guardado en: $OutputFile" -ForegroundColor Cyan

# Comparación
Write-Host ""
Write-Host "📊 Estadísticas:" -ForegroundColor Cyan
Write-Host "  Original:    $originalSize bytes"
Write-Host "  Minificado:  $minifiedSize bytes"
Write-Host "  Ahorro:      $($originalSize - $minifiedSize) bytes ($reduction%)"
Write-Host ""
