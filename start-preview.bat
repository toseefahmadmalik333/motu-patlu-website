@echo off
title Motu Patlu Food Point & Family Hall - Production Preview
cd /d "%~dp0"
echo Serving production build on http://localhost:4175...
npx vite preview --port 4175
