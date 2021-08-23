// button and click
import React from 'react';
import ReactDOM from 'react-dom';

class AddPostWithoutForm extends React.Component{

    savePost(){
    console.log('----------save post---------')
    console.log('value=', this.value)
    }

    render(){
        //console.log(this.props)
         return(
             <div>
                 <h1> Add post</h1>
                 <input onChange={(event) => {

                     //console.log(event.target.value)
                     const {value} = event.target
                     console.log(value)

                     this.value = value;
                 }}/>
                 <button onClick={() => {
                     this.savePost();
                 }}>Save</button>
             </div>
         )
    }
}

class AddPostWithForm extends React.Component{

    savePost(event){
    event.preventDefault();//pt ca se da refresh la pagina cand dam submit(save)
    console.log('----------save post---------')
    console.log('event=', event.target.user.value)
    }

    render(){
        //console.log(this.props)
         return(
             <form onSubmit={this.savePost}>
                 <h1> Add post</h1>
                 <input name="user"/>
                 <button type="submit">Save</button>
                 
             </form>
         )
    }
}

function App(){
    return (
        <div> 
           {/* <AddPostWithoutForm/> */}
           <AddPostWithForm/>

        </div>
    )}
    
    
    
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    )