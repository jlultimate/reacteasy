import React, {useState} from "react";
import './App.css';
import {Card, Icon} from "./card.js";
import {Conditional, LoadingButton} from "./conditional.js";
import {AnimalList} from "./map.js";
import {TextIn} from "./event.js";
import {CountDownTimer} from "./timer.js";
function MyComp(props){
    return <p>yo {props.name}</p>;
};
function App(){
    var [isLoading, setLoad] = useState(false);
    return (
        <div id="frag">
            <Card
                name="John"
                icon={<Icon></Icon>} 
                title="React is kinda fun! Lets continue this tommorow please 🙏" 
                children="Lets continue this tommorow please 🙏"
            ></Card>
            
            <Conditional num={15}></Conditional>
            <LoadingButton
                label="Press to load"
                isLoading={isLoading}
                onClick={() => setLoad(!isLoading)}
            ></LoadingButton>

            <AnimalList></AnimalList>

            <TextIn></TextIn>
            <hr></hr>
            <CountDownTimer hr={5} min={32} sec={58}></CountDownTimer>
        </div>
    );
};
<MyComp></MyComp>
export default App;














    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>

    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>