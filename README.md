# webpack-setup
Plain version of Webpack setup for all javascript &amp; css

# check code for linting
"lint": "eslint ./src",

# start local Server with linting
"start": "npm run lint && webpack serve --config webpack.dev.js",

# build code for dev with linting
"dev": "npm run lint && webpack --config webpack.dev.js",

# build code for Production Server with linting
"prod": "npm run lint && webpack --config webpack.prod.js"

# folder structure
src/
|
|-- assets/
|		|
|		|-- images/
|		|-- scripts/
|		|		|
|		|		|-- global/
|		|		|-- components/
|		|		|-- index.js
|		|		|-- vendor.js
|		|
|		|-- styles/
|				|
|				|-- global/
|				|-- main.scss
|
|-- template.html