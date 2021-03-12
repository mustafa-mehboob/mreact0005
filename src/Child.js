import React, { useContext } from "react";
import counterContext from "./CounterContext";

const Child = (props) => {
    let counterValue = useContext(counterContext)
    console.log(counterValue);
    return (
        <div>
            <h1>Hellow World</h1>
            <h3>My name is {props.name}</h3>
            <h4>counterValue is {counterValue[0]}</h4>

            <button onClick={()=> {counterValue[1](++counterValue[0])}}>Incrment Context</button>
        </div>
    )
}

export default Child;