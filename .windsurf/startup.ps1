# Windsurf IDE Startup Script
# This script will be detected by Windsurf IDE and can be configured to run automatically

# Get the path to the run-minimized.ps1 script
$scriptPath = Join-Path -Path $PSScriptRoot -ChildPath "..\run-minimized.ps1"

# Check if the script exists
if (Test-Path $scriptPath) {
    Write-Host "Starting watch-and-rebuild in background..."
    # Execute the run-minimized script
    & $scriptPath
    Write-Host "Watch-and-rebuild process started successfully."
} else {
    Write-Host "Error: Could not find run-minimized.ps1 script at: $scriptPath"
}
