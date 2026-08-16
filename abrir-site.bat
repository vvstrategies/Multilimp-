@echo off
chcp 65001 >nul
title GS Vitaliza - servidor local
cd /d "%~dp0"

echo.
echo  ============================================
echo   GS Vitaliza - iniciando o site local
echo  ============================================
echo.
echo   No computador:  http://localhost:3000
echo.
echo   No celular, use o endereco "Network" que
echo   aparece abaixo (o celular precisa estar na
echo   mesma rede Wi-Fi deste computador).
echo.
echo   Para parar o servidor: feche esta janela
echo   ou aperte Ctrl + C.
echo  ============================================
echo.

if not exist "node_modules" (
  echo   Instalando dependencias pela primeira vez...
  echo.
  call npm install
  echo.
)

rem Abre o navegador alguns segundos depois, ja com o servidor de pe.
rem Caminho absoluto do timeout.exe para nao depender do PATH.
start "" /b cmd /c "%SystemRoot%\System32\timeout.exe /t 5 /nobreak >nul & start "" http://localhost:3000"

call npm run dev

echo.
echo   O servidor foi encerrado.
pause
