// condition render


import React from 'react';
import ReactDOM from 'react-dom';

//1. daca dam click pe un buton se schimba culoarea (red/green)
//componenta va avea pe state culoarea

class ButonColor extends React.Component {
    constructor(props) {//initializarea state-ului se face in constructor
        super(props);// super mosteneste constructorul de la react.Component
        this.state = {
            color: 'red'
        }
    }

    render() {
        const BtnStyle = {
            backgroundColor: this.state.color,
            padding: 20,
            margin: 10,
            fontSize: 20
        }

        return (
            <button
                style={BtnStyle}
                onClick={() => {
                    console.log('click')
                    // this.setState({color: 'blue'})//se apeleaza din nou render prin setState si schimba valoare in blue

                    if (this.state.color === 'red') {
                        this.setState({ color: 'blue' })
                    } else {
                        this.setState({ color: 'red' })
                    }
                }}
            >{this.props.label}</button>
        )
    }
}

// function App() {
//     return (
//         <div>

//             <ButonColor label="ok" />
//             <ButonColor label="nu-i ok" />
//             <ButonColor label="ok,ok" />
//         </div>
//     )
// }



// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )


//2. daca dam click pe un element dispare

class GameObject extends React.Component {
    render() {
        return (
            <div 
            style={{ height: 20, width: 20, backgroundColor: 'red' }}
            onClick={() => {    
            
            this.props.clickCallBack();
            }}
            ></div>
          
            )
    }
}

class AppGameObject extends React.Component {

    constructor(props) {
        super(props);
        //    this.arrayGameObjects = [<GameObject/>,<GameObject/>,<GameObject/>,<GameObject/>,<GameObject/>,<GameObject/>]
        this.state = {
            arrayGameObjects: [
                1,
                2
            ]
        }
    }

    handleClickGameObject(gameNumber){
        console.log('s-a dat click', gameNumber)

        // facem o copie a arrayGameOnjects
        //filtram toate nr care sunt diferite de gameNumber
        const newArray = this.state.arrayGameObjects.filter(number => number !== gameNumber);
       
        // facem update la state
        this.setState({arrayGameObjects:newArray});
        
    }
    
    generateNewGameObject = () => {
        console.log("s-a generat un nou buton")
        this.setState({
            arrayGameObjects: this.state.arrayGameObjects.concat([this.state.arrayGameObjects.length +1])
        })
    }
    render() {
        return (
            <div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    padding: 40,
                }}>
                    {this.state.arrayGameObjects.map((number) =>{
                        return(
                            <GameObject clickCallBack={()=>{this.handleClickGameObject(number)
                            }}/>
                        )
                    })}
                </div>
                <button
                    onClick={this.generateNewGameObject}
                >Generate new button</button>
            </div>
        )
    }
}

ReactDOM.render(
    <AppGameObject />,
    document.getElementById('root')
)
