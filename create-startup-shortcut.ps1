$scriptPath = Join-Path -Path $PSScriptRoot -ChildPath "watch-and-rebuild.ps1"
$startupFolder = [Environment]::GetFolderPath('Startup')
$shortcutPath = Join-Path -Path $startupFolder -ChildPath "AgentBuilder-WatchAndRebuild.lnk"

$WshShell = New-Object -ComObject WScript.Shell
$Shortcut = $WshShell.CreateShortcut($shortcutPath)
$Shortcut.TargetPath = "powershell.exe"
$Shortcut.Arguments = "-ExecutionPolicy Bypass -WindowStyle Hidden -File `"$scriptPath`""
$Shortcut.WorkingDirectory = $PSScriptRoot
$Shortcut.Description = "Auto-run watch and rebuild script for Agent Builder"
$Shortcut.Save()

Write-Host "Startup shortcut created at: $shortcutPath"
Write-Host "The watch-and-rebuild script will automatically run when you log in to Windows."
