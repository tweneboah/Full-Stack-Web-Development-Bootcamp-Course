import React, { createContext, useContext, useState } from "react";
import "./App.css";
//Create a context to hold the count state and updater functions
const CountContext = createContext();

function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  //Function to increment the count
  const increment = () => setCount(count + 1);
  //Function to decrement the count
  const decrement = () => setCount(count - 1);

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
}

function useCount() {
  const context = useContext(CountContext);
  return context;
}

const Counter = () => {
  const { count, increment, decrement } = useCount();
  return (
    <div className="counter-container">
      <h1> {count}</h1>
      <button className="button" onClick={increment}>
        +
      </button>
      <button className="button" onClick={decrement}>
        -
      </button>
    </div>
  );
};
const App = () => {
  return (
    <div className="app-container">
      <h1 className="title">React Counter</h1>
      <p className="sub-description">
        A simple counter application using Context API
      </p>
      <CountProvider>
        <Counter />
      </CountProvider>
    </div>
  );
};

export default App;
