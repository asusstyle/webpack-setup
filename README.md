# webpack-setup
Plain version of Webpack setup for all javascript &amp; css

# check code for linting
npm run lint    // "lint": "eslint ./src"

# start local Server with linting
npm start    // "start": "npm run lint && webpack serve --config webpack.dev.js"

# build code for dev with linting
npm run dev    // "dev": "npm run lint && webpack --config webpack.dev.js"

# build code for Production Server with linting
npm run prod    // "prod": "npm run lint && webpack --config webpack.prod.js"

# folder structure
`src/
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
|-- template.html`
