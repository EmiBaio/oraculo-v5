@echo off
chcp 65001 >nul
title Oraculo del Velo Astral - Build de Produccion (v8)
echo ============================================================
echo   ORACULO DEL VELO ASTRAL - COMPILADOR DE PRODUCCION (v8)
echo ============================================================
echo.

where node >nul 2>nul
if %errorlevel% neq 0 (
  echo [ERROR] Node.js no esta instalado en esta PC.
  echo.
  echo Opcion A: Instalalo gratis desde https://nodejs.org ^(version LTS^) y volve a abrir este archivo.
  echo Opcion B: No necesitas instalar nada; simplemente subi los archivos a GitHub y GitHub Actions
  echo           compila y publica automaticamente en https://emibaio.github.io/oraculo-v5/
  echo.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo [1/2] Instalando compiladores locales ^(esbuild + Tailwind CSS v3^)...
  call npm install
  if %errorlevel% neq 0 (
    echo [ERROR] Fallo npm install. Revisa tu conexion a internet.
    pause
    exit /b 1
  )
)

echo [2/2] Pre-compilando JSX, generando CSS estatico y empaquetando bundles...
call npm run build
if %errorlevel% neq 0 (
  echo [ERROR] El build fallo. Revisa el mensaje de arriba.
  pause
  exit /b 1
)

echo.
echo ============================================================
echo   LISTO! Tu sitio optimizado quedo en la carpeta: distecho   Podes abrir dist\index.html directo en Chrome para probarlo.
echo ============================================================
pause
