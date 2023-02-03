import Recat from 'react';
import ReactDOM from 'react-dom/client';

console.log('hi');

// React elements are inner JS objects

// null - reprsents an object without any inner properties
// const element = React.createElement('div', null, 'React element!');

const element = <div>React element with JSX!</div>;
// JSX isn't supported by browser
// React specific syntax that framework supports make it convenient for coding

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
// direct child of document body
// creating roots directly with doc body discouraged
// low level access of doc body 
// this can cause conflicts between code and libraries, starts to manage react application



// package.json

// test - print statement in command line
// "scripts": {
//   "start": "echo \"Error: no test specified\" && exit 1"
// },

// "scripts": {
//   "start": "parcel index.html"
// },
// will fire parcel server, parcel as a bundler will look at index.html


// Parceljs work - bundler
// dist directory, newly created
// content matches as in browser
// parcel - copies index.html into dist 
// bundler - smush all JS code into one giant file, any imports in JS
// eg, react - react lib code bundled along with giant file 
// WHY? browser doesn't support import export system
// can't load up a directory of JS files and figure out how to include that automatically
// need to work with giant bundled version - parcel gets all necessary code from import

// 1 way - using CDN links, import by links 
// 2 way - bundled approach, one root index.js file in which all bundled code hets built up for us within our distribuition directory into overall index.js file 

// create-react-app has same approach
// it hides all this