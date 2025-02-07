import React from "react";
import { useState } from "react";
import "./App.css";
import Apptwo from "./Apptwo.jsx";
import Daytwo from "./SecondDay.jsx";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { DiApple } from "react-icons/di";

import Child from "./Child.jsx"


function App() {
  const [value, setValue] = useState(99);
  function inc() {
    setValue((value) => value + 1);
  }

  function dec() {
    setValue((value) => value - 1);
  }

  const [name, setName] = useState("coordinator");
  function fun() {
    let arr = ["learn", "earn", "donate"];
    let n = Math.floor(Math.random() * 3);
    setName(arr[n]);
  }

  //array accessing in a list
  const arr = ["Hello", "hi", "bye"];

  //array object item access

  const arrTwo = [
    { id: 1, name: "Hari" },
    { id: 2, name: "Hara" },
    { id: 3, name: "sudhan" },
  ];

  return (
    <>
      <div className="bodycenter">
        <button onClick={() => inc()}>+</button>
        <span className="d">{value}</span>
        <button onClick={() => dec()}>-</button>

        <p className="p">let {name} money</p>
        <button className="b" onClick={() => fun()}>
          click
        </button>
      </div>

      <Apptwo />
      <Daytwo/>


      <div>
        <h2>Iterating array</h2>
      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      </div>

      <div>
        <h2>Iterating array Object</h2>
        <ul className="">
          {arrTwo.map((a) => (
            <li key={a.id}> {a.name} </li>
          ))}
        </ul>
      </div>


    <h3 className="icon">
      Lets go for a <span className="fff"><FaBeer/></span>?
    </h3>
    <h3 className="icon">
    This is logo of apple <span className="fff"><DiApple /></span>

    </h3>


   {/* Passing props to child */}
    <Child name = "Ashutosh" num = "8260774591" header = "This is props"/>
    </>
  );
}

export default App;
