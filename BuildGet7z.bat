@echo off
set zip="C:\Program Files\7-Zip\7z.exe"

%zip% a ENTGalite.7z ^
   installGet.bat ^
   main.py ^
   README.md ^
   runget.run ^
   interface\src ^
   interface\dist
pause