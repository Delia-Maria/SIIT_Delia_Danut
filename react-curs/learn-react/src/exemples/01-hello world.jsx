// afisam un hello world
//V1. DOM API

const helloWorld = document.createElement('h1');
helloWorld.innerText = "hello world with JS";

document.body.appendChild(helloWorld);

// V2. REACT

import React from 'react';
import ReactDOM from 'react-dom';

//Creaza anumite obiecte de tip React
const helloWorldReact = React.createElement('h1', null, "Hello World WITH REACT")

//Afisam obiectele de tip react in dom( DOM API)
ReactDOM.render(
    helloWorldReact,
    document.getElementById('root')
)


// V3. REACT JSX

const helloWorldReactJsx = ( < h1 > Hello world with jsx </h1>)

        ReactDOM.render(
            helloWorldReactJsx,
            document.getElementById('root')
        )