# Script para convertir jQuery a Vanilla JavaScript con encoding UTF-8
Get-ChildItem -Recurse -Filter "*.html" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw -Encoding UTF8
    $original = $content
    
    # iconos.html specific patterns
    $content = $content -replace '\$\(e\.target\)\.html\(\)', 'e.target.innerHTML'
    $content = $content -replace '\$\(e\.target\)\.parent\(\)\.html\(\)', 'e.target.parentElement.innerHTML'
    $content = $content -replace '\$\("\.icono"\)\.on\("click",', 'document.querySelectorAll(".icono").forEach(el => el.addEventListener("click",'
    $content = $content -replace 'var aux = \$\("<textarea>"\);', 'var aux = document.createElement("textarea");'
    $content = $content -replace '\$\("body"\)\.append\(aux\);', 'document.body.appendChild(aux);'
    
    # grupos_form.html patterns
    $content = $content -replace '\$\("#([^"]+)"\)\.keyup\(', 'document.getElementById("$1").addEventListener("keyup",'
    $content = $content -replace '\$\("#([^"]+), #([^"]+), #([^"]+), #([^"]+), #([^"]+)"\)\.keyup\(', 'document.querySelectorAll("#$1, #$2, #$3, #$4, #$5").forEach(el => el.addEventListener("keyup",'
    $content = $content -replace '\$\("#([^"]+)"\)\.val\(\)', 'document.getElementById("$1").value'
    $content = $content -replace '\$\("#([^"]+)"\)\.removeClass\("([^"]+)"\)', 'document.getElementById("$1").classList.remove("$2")'
    $content = $content -replace '\$\("#([^"]+)"\)\.addClass\("([^"]+)"\)', 'document.getElementById("$1").classList.add("$2")'
    
    if ($content -ne $original) {
        $utf8NoBom = New-Object System.Text.UTF8Encoding $false
        [System.IO.File]::WriteAllText($_.FullName, $content, $utf8NoBom)
        Write-Host "Converted jQuery in: $($_.Name)"
    }
}
