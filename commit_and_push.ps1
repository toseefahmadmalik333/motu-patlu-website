$gitExe = "$env:LOCALAPPDATA\Programs\MinGit\cmd\git.exe"

Write-Host "Using git at: $gitExe"
& $gitExe status

Write-Host "Staging changes..."
& $gitExe add -A

Write-Host "Committing changes..."
& $gitExe commit -m "Self-host all food & avatar images locally and update image paths"

Write-Host "Pushing to GitHub..."
& $gitExe push origin main

Write-Host "Git push complete!"
