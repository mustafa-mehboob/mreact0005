import React, { useContext } from "react";
import counterContext from "./CounterContext";

const Child = (props) => {
    let counterValue = useContext(counterContext)
    console.log(counterValue);
    return (
        <div>
            <h1>Hellow World</h1>
            <h3>My name is {props.name}</h3>
            <h4>counterValue is {counterValue}</h4>
        </div>
    )
}

export default Child;