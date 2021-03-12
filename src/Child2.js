import React, {useReducer} from "react";
import CounterReducer from "./CounterReducer";

const Child2 = () => {

    let [state , dispatch] = useReducer(CounterReducer , 1)
    return (
        <div>
          <h2>The value of couunter reducer is : {state}</h2>

          <button onClick={()=>dispatch('INCREMENT')}>Incrment Reducer</button>

        </div>
    )
}

export default Child2;