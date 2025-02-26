$lastChange = Get-Date
$pathsToWatch = @(
    ".\app",
    ".\middleware",
    ".\sdk",
    ".\public",
    ".\Dockerfile",
    ".\Dockerfile.dev",
    ".\docker-compose.yml",
    ".\docker-compose.dev.yml",
    ".\next.config.mjs"
)

Write-Host "Starting to watch for changes..."
while ($true) {
    $changes = $false
    foreach ($path in $pathsToWatch) {
        $files = Get-ChildItem -Path $path -Recurse | Where-Object { $_.LastWriteTime -gt $lastChange }
        if ($files) {
            $changes = $true
            break
        }
    }

    if ($changes) {
        Write-Host "Changes detected. Rebuilding Docker containers..."
        docker-compose -f docker-compose.dev.yml down
        docker-compose -f docker-compose.dev.yml build
        docker-compose -f docker-compose.dev.yml up -d
        $lastChange = Get-Date
        Write-Host "Rebuild complete. Watching for new changes..."
    }

    Start-Sleep -Seconds 5
}
