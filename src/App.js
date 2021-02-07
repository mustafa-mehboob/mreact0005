import './App.css';
import Parent from "./Parent";
import CounterContext from "./CounterContext";

function App() {
  return (
    <CounterContext.Provider value={19}>
      <div>
        <Parent name="Mustafa" />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
