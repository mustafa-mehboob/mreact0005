import React, {useState} from "react";
import './App.css';
import Parent from "./Parent";
import CounterContext from "./CounterContext";
import { useState } from 'react';

function App() {

  let [count, SetCount] = useState(75) 
  return (
    <CounterContext.Provider value={count}>
      <div>
        <Parent name="Mustafa" />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
