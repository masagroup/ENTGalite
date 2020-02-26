@echo off
set zip="C:\Program Files\7-Zip\7z.exe"
set pws=powershell.exe -ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile
set pysPath=%HomePath%\Documents\pysword\
set getPath=%HomePath%\Documents\Get\
set getBin=run.bat
set getShortcut=%HomePath%\Desktop\GET.lnk

REM Install GET
%zip% x pysword.7z -o%pysPath%
%zip% x ENTGalite.7z -o%getPath%
%zip% x ADT.7z -o%getPath%
copy /y runget.run %getPath%%getBin%

REM Create Desktop shortcut
%pws% -Command "$ws = New-Object -ComObject WScript.Shell;" ^
    "$s = $ws.CreateShortcut('%getShortcut%');" ^
    "$S.targetPath = '%getPath%%getBin%';" ^
    "$S.WorkingDirectory = '%getPath%';" ^
	"$S.Save()"