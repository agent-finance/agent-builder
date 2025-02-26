$scriptPath = Join-Path -Path $PSScriptRoot -ChildPath "watch-and-rebuild.ps1"

# Create a minimized PowerShell window that runs the watch script
$psi = New-Object System.Diagnostics.ProcessStartInfo
$psi.FileName = "powershell.exe"
$psi.Arguments = "-ExecutionPolicy Bypass -File `"$scriptPath`""
$psi.WorkingDirectory = $PSScriptRoot
$psi.WindowStyle = [System.Diagnostics.ProcessWindowStyle]::Minimized

# Start the process
$process = [System.Diagnostics.Process]::Start($psi)

Write-Host "Watch and rebuild script is now running in a minimized window (Process ID: $($process.Id))"
Write-Host "To stop it, you'll need to close the PowerShell window or end the process in Task Manager."
