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


  //form
  const [formData,setFormData] = useState({first:"" , last:""});
  function funChange(e){
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  function func(e){
    e.preventDefault();
    console.log(formData);
    
  }




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
    

    {/* Form */}

    <form onSubmit={fun}>
      <label>First Name</label>
      <input type="text" name="first"  value={formData.first}/>
      <label>Last Name</label>
      <input type="text" name="first"  value={formData.last}/>


    </form>


    





    </>
  );
}

export default App;













// import React from "react";
// import { IoCallOutline } from "react-icons/io5";
// import { CiMail } from "react-icons/ci";
// import {
//   FaWhatsapp,
//   FaInstagram,
//   FaTwitter,
//   FaFacebook,
//   FaLinkedin,
//   FaTelegramPlane,
// } from "react-icons/fa";
// import "./App.css";

// const App = () => {
//   // const leftupper = [CiMail,IoCallOutline];
//   const rightupper = [
//     FaWhatsapp,
//     FaFacebook,
//     FaInstagram,
//     FaTwitter,
//     FaLinkedin,
//     FaTelegramPlane,
//   ];

//   const lowerItem = [
//     "Home",
//     "Services",
//     " Skill Up With Us",
//     "Products",
//     "Carrers",
//   ];

//   return (
//     <div className="main-div">
//       {/* upper nav section */}
//       <div className="upperNav">
//         <div className="leftupper">
//           {/* {leftupper.map((Icons, index) => (
//             <li key={index}>{Icons}</li>
//           ))} */}

//           <li>
//             <CiMail className="left-icon" />
//             info@smartica.co.in
//           </li>
//           <li>
//             <IoCallOutline className="left-icon" />
//             +91 9363282829
//           </li>
//         </div>

//         <div className="rightupper">
//           {rightupper.map((Icons, index) => (
//             <div key={index} className="gola">
//               <Icons className="icon" />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="lowerNav">
//         <div className="logo">
//           <img
//             src="https://www.smartica.co.in/src/assets/images/smart-logo.png"
//             alt=""
//           />
//         </div>
//         <div className="lower-item">
//           {lowerItem.map((Item, index) => (
//             <li key={index}>{Item}</li>
//           ))}
//         </div>
//       </div>

//       <div className="smartica-1st-page">
//         <div className="bodypart">{/* background-color */}</div>
//         <div className="text-part">
//           <h4>REACH YOUR CARRER THROUGH</h4>
//           <h3>
//             India's Largest carrer <br /> development company
//           </h3>

//           <button className="btn btn1">Learn More</button>
//           <button className="btn btn2">View Courses</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;