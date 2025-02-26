# Setting up as a Windows Service

For a more permanent solution, you can set up your watch-and-rebuild script as a Windows service using NSSM (Non-Sucking Service Manager).

## Prerequisites

1. Download NSSM from: https://nssm.cc/download
2. Extract the zip file and note the path to nssm.exe (use the appropriate version for your system - 32-bit or 64-bit)

## Installation Steps

1. Open Command Prompt as Administrator
2. Navigate to the directory containing nssm.exe
3. Run the following command (adjust paths as needed):

```
nssm.exe install AgentBuilderWatcher
```

4. In the GUI that appears:
   - Set the "Path" to: `C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe`
   - Set the "Arguments" to: `-ExecutionPolicy Bypass -File "C:\Users\Junrey\Documents\projects\agent-builder\watch-and-rebuild.ps1"`
   - Set the "Startup directory" to: `C:\Users\Junrey\Documents\projects\agent-builder`
   
5. Go to the "Details" tab:
   - Set "Display name" to: `Agent Builder Watcher`
   - Set "Description" to: `Watches for changes in the Agent Builder codebase and rebuilds Docker containers`
   
6. Click "Install service"

## Managing the Service

- To start the service: `nssm.exe start AgentBuilderWatcher` or use Windows Services manager
- To stop the service: `nssm.exe stop AgentBuilderWatcher` or use Windows Services manager
- To remove the service: `nssm.exe remove AgentBuilderWatcher` or use Windows Services manager

## Viewing Logs

The service output will be redirected to the Windows Event Log by default. You can view it in the Event Viewer under "Windows Logs" > "Application".
