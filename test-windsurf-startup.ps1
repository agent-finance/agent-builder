# This script tests the Windsurf startup configuration
# Run this script to verify that the startup configuration works correctly

$windsurfDir = Join-Path -Path $PSScriptRoot -ChildPath ".windsurf"
$startupScript = Join-Path -Path $windsurfDir -ChildPath "startup.ps1"
$configFile = Join-Path -Path $windsurfDir -ChildPath "config.json"

Write-Host "Testing Windsurf startup configuration..." -ForegroundColor Cyan

# Check if the .windsurf directory exists
if (-not (Test-Path $windsurfDir)) {
    Write-Host "Error: .windsurf directory not found." -ForegroundColor Red
    exit 1
}

# Check if the startup script exists
if (-not (Test-Path $startupScript)) {
    Write-Host "Error: startup.ps1 script not found." -ForegroundColor Red
    exit 1
}

# Check if the config file exists
if (-not (Test-Path $configFile)) {
    Write-Host "Error: config.json file not found." -ForegroundColor Red
    exit 1
}

# Execute the startup script
Write-Host "Executing startup script..." -ForegroundColor Yellow
& $startupScript

Write-Host "Test completed successfully!" -ForegroundColor Green
Write-Host "The watch-and-rebuild process should now be running in the background." -ForegroundColor Green
Write-Host "When you open this project in Windsurf IDE, the watch-and-rebuild process should start automatically." -ForegroundColor Green
