$lastChange = Get-Date
$pathsToWatch = @(
    ".\app",
    ".\components",
    ".\public",
    ".\styles",
    ".\Dockerfile"
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
        docker-compose down
        docker-compose build
        docker-compose up -d
        $lastChange = Get-Date
        Write-Host "Rebuild complete. Watching for new changes..."
    }

    Start-Sleep -Seconds 5
}
