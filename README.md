# ENT GET


## Installation Developpement

Install pysword see https://github.com/masagroup/pysword

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install ENT GET.

Python and node.js is required for this project

Dependencies installation
```bash
pip install  -r requirements.txt
cd interface
npm install
```

Starting project: 
```bash
cd interface 
npm start
```
Open new terminal at the root of the repository
```bash
python main.py --dev --manchettes <nom d'un fichier de manchettes>
```
for dev with default config.
You can change *root_dir*, *ip* and *port* for simulation connexion with:
```bash
python main.py --dev --host 172.19.2.91 --sim-port 10168 --root-dir="C:\ProgramData\MASA Group\SWORD Client\bin\_\3"  --running '..\Downloads\marches_by_lines.json' --manchettes <nom d'un fichier de manchettes>
```
root_dir means "where data have been downloaded or installed":
* With SWORD admin, data are usally in <where SWORD Client is installed>/bin/_/<a number>. Find where is physcal data base *SNCF*.
* With selftraining, *root_dir* is given by admin>Settings>Data directory in the frontend.

Please launch:
```bash
python main.py -h
```
for more usage options.

## Installation Production

Install pysword see https://github.com/masagroup/pysword

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install ENT GET.

Python and node.js is required for this project

Dependencies installation
```bash
pip install  -r requirements.txt
cd interface
npm install
npm run-script build
```

Launching Project

```bash
py .\main.py --host 172.19.2.91 --sim-port 10168 --root-dir="C:\ProgramData\MASA Group\SWORD Client\bin\_\3"  --running '..\Downloads\marches_by_lines.json' --manchettes <nom d'un fichier de manchette>
```
or
```bash
python main.py -h
```
to see explicit others options

