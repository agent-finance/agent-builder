# Windsurf IDE Auto-Run Configuration

This directory contains configuration files for automatically running the watch-and-rebuild script when opening this project in Windsurf IDE.

## How It Works

1. The `config.json` file tells Windsurf IDE to run the `startup.ps1` script when the project is opened.
2. The `startup.ps1` script launches the watch-and-rebuild process in a minimized window using the `run-minimized.ps1` script.

## Manual Configuration in Windsurf IDE

If the automatic configuration doesn't work, you can manually configure Windsurf IDE:

1. Open Windsurf IDE and go to **Settings** or **Preferences**
2. Look for **Project Settings** or **Startup Scripts**
3. Enable the option to run project-specific startup scripts
4. Make sure the `.windsurf` directory is recognized by the IDE

## Troubleshooting

If the watch-and-rebuild script doesn't start automatically:

1. Check if the `.windsurf` directory is properly recognized by the IDE
2. Verify that the `startup.ps1` script has the correct permissions to run
3. Try running the `startup.ps1` script manually to see if there are any errors
4. Check the Windsurf IDE logs for any startup script execution issues

## Disabling Auto-Run

To disable the auto-run feature:

1. Edit the `config.json` file and change `"enabled": true` to `"enabled": false`
2. Or change `"runOnOpen": true` to `"runOnOpen": false`
