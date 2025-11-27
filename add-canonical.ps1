# Script para agregar rel canonical a todas las páginas HTML
# Uso: .\add-canonical.ps1

$baseUrl = "https://bodystyle.webcindario.com"
$version = "5.8.0"

Write-Host "Agregando rel canonical a la documentacion" -ForegroundColor Cyan
Write-Host "URL Base: $baseUrl" -ForegroundColor Green
Write-Host ""

$processedFiles = 0
$skippedFiles = 0

# Procesar index.html principal
$indexPath = "$version\index.html"
if (Test-Path $indexPath) {
    $content = Get-Content -Path $indexPath -Raw
    
    if ($content -notmatch 'rel="canonical"') {
        $canonicalTag = "    <link rel=`"canonical`" href=`"$baseUrl/`">`r`n</head>"
        $newContent = $content -replace '</head>', $canonicalTag
        $newContent | Out-File -FilePath $indexPath -Encoding UTF8 -NoNewline
        Write-Host "[OK] index.html" -ForegroundColor Green
        $processedFiles++
    } else {
        Write-Host "[SKIP] index.html (ya tiene canonical)" -ForegroundColor Yellow
        $skippedFiles++
    }
}

# Procesar páginas
$paginasPath = "$version\paginas"
if (Test-Path $paginasPath) {
    $htmlFiles = Get-ChildItem -Path $paginasPath -Filter "*.html" -File
    
    foreach ($file in $htmlFiles) {
        $content = Get-Content -Path $file.FullName -Raw
        
        if ($content -notmatch 'rel="canonical"') {
            $canonicalUrl = "$baseUrl/paginas/$($file.Name)"
            $canonicalTag = "    <link rel=`"canonical`" href=`"$canonicalUrl`">`r`n</head>"
            $newContent = $content -replace '</head>', $canonicalTag
            $newContent | Out-File -FilePath $file.FullName -Encoding UTF8 -NoNewline
            Write-Host "[OK] $($file.Name)" -ForegroundColor Green
            $processedFiles++
        } else {
            Write-Host "[SKIP] $($file.Name)" -ForegroundColor Yellow
            $skippedFiles++
        }
    }
}

# Procesar archivos en raíz
$rootFiles = @("changelog.html", "performance-analysis.html")
foreach ($fileName in $rootFiles) {
    if (Test-Path $fileName) {
        $content = Get-Content -Path $fileName -Raw
        
        if ($content -notmatch 'rel="canonical"') {
            $canonicalUrl = "$baseUrl/$fileName"
            $canonicalTag = "    <link rel=`"canonical`" href=`"$canonicalUrl`">`r`n</head>"
            $newContent = $content -replace '</head>', $canonicalTag
            $newContent | Out-File -FilePath $fileName -Encoding UTF8 -NoNewline
            Write-Host "[OK] $fileName" -ForegroundColor Green
            $processedFiles++
        } else {
            Write-Host "[SKIP] $fileName" -ForegroundColor Yellow
            $skippedFiles++
        }
    }
}

Write-Host ""
Write-Host "Procesados: $processedFiles" -ForegroundColor Green
Write-Host "Omitidos: $skippedFiles" -ForegroundColor Yellow
Write-Host ""
Write-Host "Listo!" -ForegroundColor Cyan
