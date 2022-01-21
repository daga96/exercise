import React from "react";
import "./App.css";
import { useState, useReducer, useEffect } from "react";
import axios from "axios";

export default function App() {
  //useEffect
  const [data, setData] = useState("");

  useEffect(() => {
    console.log("componentDidMount");

    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setData(res.data[0]);
      console.log(res.data[0]);
    });
  }, []);

  //useReduce

  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFunction, { count: 0 });
  const [counter, setCounter] = useState(0);
  //function for useState
  const raiseCounter = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const lowerCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <div className="exercise">
        <h1> Counter Using Hooks: useState</h1>
        <p>{counter}</p>
        <button onClick={raiseCounter}>+</button>
        <button onClick={lowerCounter}>-</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
      <div className="exercise">
        <h1> Counter Using Hooks: useReducer</h1>
        <p>{state.count}</p>
        <button
          onClick={() => {
            dispatch({ type: "increment" });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
        >
          -
        </button>

        <button
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Reset
        </button>
      </div>

      <div className="exercise">
        <h1> API Call </h1>
        <h3>email: {data.email}</h3>
        <h4>Titile: {data.name}</h4>
        <p> {data.body} </p>
      </div>
    </div>
  );
}
