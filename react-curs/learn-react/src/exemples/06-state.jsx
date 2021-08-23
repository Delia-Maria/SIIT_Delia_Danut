//STATE

import React, {useState} from 'react'; //pt hooks adaugam useState
import ReactDOM from 'react-dom';

class CounterApp extends React.Component {

    constructor(props){
        super(props);

        this.state= {
            counter: 0//definim valoarea initiala de la this
        }
    }

    pressButton() {
        //ne asigura ca se va face update pe UI, se randeaza componenta
        this.setState({counter: this.state.counter +1})//O METODA CE VINE PRIN POSTENIRE DE LA REACT.COMPONENT

        console.log(this.state)
    }
//de fiecare data cand se schimba this.state va fi apelata din nou render, 
//adica tot timpul afisam in UI versiunea actualizata a state-ului    
    render(){

        return (
            <div>
            <h1> State: {this.state.counter}</h1>
            <button onClick={() => this.pressButton() }>Click here</button>
            </div>
        )
    }
}

//acelasi lucru dar cu HOOKS
function CounterAppHooks(){
    const [count, setCount]=useState(0);

    return (
        <div>
        <h1> State cu Hooks: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Click here</button>
        </div>
    )
}
    

function App(){
    return (
        <div> 
          <CounterApp/>
          <CounterAppHooks/>

        </div>
    )}
    
    
    
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    )