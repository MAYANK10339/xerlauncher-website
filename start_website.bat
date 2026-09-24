@echo off
title XerLauncher Website Server
cd /d "C:\Users\Admin\.gemini\antigravity-ide\scratch\xerlauncher-website"
echo ===================================================
echo     XerLauncher Official Website Server
echo ===================================================
echo.
echo Starting local web server on port 8080...
echo Website accessible at: http://localhost:8080
echo.
start http://localhost:8080
python -m http.server 8080
pause
