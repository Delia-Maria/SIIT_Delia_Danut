//Components with props
import React from 'react';
import ReactDOM from 'react-dom';


function Post(props){
  const postStyle = {
    marginTop: '10px',
    border: `1px solid ${props.isGreen? 'green' : 'red'}`,
    padding: '10px'
}
    return (
    <div className="post" id="post"
    style={postStyle}>
        <h1>{props.title}</h1>
        <p> {props.content}</p>
    </div>
)}

class PostCls extends React.Component{
    render(){
        //console.log(this.props)
         return(
             <div>
                 <h1> Post 3 - {this.props.title}</h1>
             </div>
         )

    }
}

function App(){
    return (
        <div>
            Hello WORLD
            <Post title="Post1" content="Content 1"/>
            <Post title="Post2" content="Content 2" isGreen={true}/>
            <PostCls title="Post class"/>
        
        </div>
    )}
    
    
    
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    )
    