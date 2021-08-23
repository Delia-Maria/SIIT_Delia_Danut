//Components
//o componenta este o parte din UI 
import React from 'react';
import ReactDOM from 'react-dom';

//o clasa de js ca sa fie componenta react va trebui sa mosteneasca react.component
//si sa implementeze metoda render
class PostCls extends React.Component{

    render(){

        return(
            <div>
                <h1> heiii</h1>
            </div>
        )
    }

}

function Post(){
    const MyName = "Delia";

    return (
    <div>
        <h1>Post 1 JSX</h1>
        <p> Post comment</p>
        <p>Autor:{MyName}</p>
    </div>
)}

function App(){
return (
    <div>
        Hello WORLD
        <Post />
        <Post />
        <PostCls/>
    </div>
)}



ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
