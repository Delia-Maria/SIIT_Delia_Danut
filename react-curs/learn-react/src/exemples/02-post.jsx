//v1. Dom

const postElement = document.createElement('div')

const postTitle = document.createElement('h1')
postTitle.innerText = 'Post1'

const postBody = document.createElement('p')
postBody.innerText = "Post comment"

postElement.append(postTitle,postBody);

document.body.appendChild(postElement);

// v2. React
import React from 'react';
import ReactDOM from 'react-dom';

const postTileReact =React.createElement('h1',null,'Post1 with React');
const postBodyReact =React.createElement('p',null,'Post Comment');

const postElReact =React.createElement('div', null, postTileReact, postBodyReact)

ReactDOM.render (
    postElReact,
    document.getElementById('root')

)

//v3. JSX

const postJSX = (
    <div>
        <h1>Post 1 JSX</h1>
        <p> Post comment</p>
    </div>
)
ReactDom.render (
    postJSX,
    document.getElementById('root')

)