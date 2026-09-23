@echo off
set "PATH=%LOCALAPPDATA%\Programs\MinGit\cmd;%LOCALAPPDATA%\Microsoft\WinGet\Packages\GitHub.cli_Microsoft.Winget.Source_8wekyb3d8bbwe\bin;%PATH%"
cd /d "%~dp0"

echo ========================================================
echo   Motu Patlu Food Point - Push to GitHub
echo ========================================================
echo.
echo Checking GitHub authentication...
gh auth status >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] You are not yet logged in to GitHub.
    echo Opening browser to log in with your GitHub account...
    gh auth login --web
)

echo.
echo Creating public repository 'motu-patlu-website' on GitHub and pushing files...
gh repo create motu-patlu-website --public --source=. --remote=origin --push

echo.
echo ========================================================
echo [SUCCESS] Your repository is now live on GitHub!
echo.
echo Now deploy to Vercel in 2 clicks:
echo 1. Open: https://vercel.com/new
echo 2. Click 'Import' next to 'motu-patlu-website'
echo 3. Click 'Deploy'
echo ========================================================
pause
