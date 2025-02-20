# what is typescript?
superset of javascript
strongly typed
compiles to standard js
runs everywhere js runs

# what to expect?
learn all major features of ts
see lots of demos (code along)
tight focus on language
will not cover every skill web devs need

# setup dev env
nodejs
vscode
typescript compiler
(can be downloaded in 3 ways:- npm package / nuget package /vs extension )

# basic commands
- to check where tsc installed globally 
npm list -g typescript
npx tsc --version
npx tsc --help
- compiling ts file to js
npx tsc --outDir js app.ts
- run the js file 
cd js-> node app.js
- live watch tsc file
cd.. -> npx tsc --outDir js --watch app.ts
- to initiate typescript project
npx tsc --init
- uncomment outdir in ts config file and add ./js to the path
npx tsc 
- to create tasks.json in .vscode
>tasks - configure tasks - create tasks.json - data
- after creating launch.json 
use F5 to debug/run the program of js file

