# webpack-setup
Plain version of Webpack setup for minified javascript and css files.
This will output minified css and minified vendor & main javascript files.

# check code for linting
npm run lint

# start local Server with linting
npm start

# build code for dev with linting
npm run dev

# build code for Production Server with linting
npm run prod

# folder structure
```
src/
|
|-- assets/
|	|
|	|-- images/
|	|-- scripts/
|	|	|
|	|	|-- global/
|	|	|-- components/
|	|	|-- index.js
|	|	|-- vendor.js
|	|
|	|-- styles/
|		|
|		|-- global/
|		|-- main.scss
|
|-- template.html
```