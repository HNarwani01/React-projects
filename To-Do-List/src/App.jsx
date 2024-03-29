import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Thead from "./components/Thead.jsx";
import Tdata from "./components/Tdata.jsx";
import WelcomeMessage from "./components/Welcome.jsx";

function App() {
  const [work, setWork] = useState([
    {
      work: 'Washing Dishes',
      Time: '20/03/2024'
    },
    {
      work: 'Cleaning House',
      Time: '20/03/2024'
    }
  ]);
  
  const handleAddToWork = (workTodo, time) => {
    if (workTodo !== '' && time !== '') {
      setWork((currentValue)=>[...currentValue, {work: workTodo,Time: time}]);
    }
  };
  
  const handleremovefromwork = (i) => {
    let newWork = [...work]; // Create a copy of the original array
    newWork.splice(i, 1); // Remove the item at index i from the copied array
  
    setWork(newWork); // Update the state with the modified array
  };
  return (
    <center className="center-tag">
      <table className="table table-success table-striped">
      <Thead addtowork={handleAddToWork} />
        <tbody>
          {work.map((item, index) => (
            <Tdata removefromwork={handleremovefromwork} key={index} value={item} index={index}/>
          ))}
        </tbody>
      </table>
      {work.length===0 && (<WelcomeMessage/>)}
    </center>
  );
}

export default App;
