$gitExe = "$env:LOCALAPPDATA\Programs\MinGit\cmd\git.exe"

Write-Host "1. Initializing repository..."
& $gitExe init

Write-Host "2. Configuring Git user identity..."
& $gitExe config user.name "Toseef Malik"
& $gitExe config user.email "toseefmalik@users.noreply.github.com"

Write-Host "3. Adding files to git..."
& $gitExe add .

Write-Host "4. Creating initial commit..."
& $gitExe commit -m "Initial commit: Motu Patlu Food Point website"

Write-Host "5. Setting branch to main..."
& $gitExe branch -M main

Write-Host "Git setup complete! Current commit:"
& $gitExe log -1 --oneline
