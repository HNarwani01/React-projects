import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Thead from "./components/Thead.jsx";
import Tdata from "./components/Tdata.jsx";
import WelcomeMessage from "./components/Welcome.jsx";
import { WorkList } from "./store/WorkList.jsx";

function App() {
  const toDoItemsFromContext =useContext(WorkList);
  
  const [work, setWork] = useState(toDoItemsFromContext);
  
  const addToWork = (workTodo, time) => {
    if (workTodo !== '' && time !== '') {
      setWork((currentValue)=>[...currentValue, {work: workTodo,Time: time}]);
    }
  };
  
  const removefromwork = (i) => {
    let newWork = [...work]; // Create a copy of the original array
    newWork.splice(i, 1); // Remove the item at index i from the copied array
  
    setWork(newWork); // Update the state with the modified array
  };
  const defaultTodo = [{
    work: 'Cleaning House',
    Time: '20/03/2024'
  }]
  return (
    <WorkList.Provider value={{work,removefromwork,addToWork}}>
    <center className="center-tag">
      <table className="table table-success table-striped">
      <Thead  />
        <tbody>
          <Tdata/>
        </tbody>
      </table>
      <WelcomeMessage/>
    </center>
    </WorkList.Provider>
  );
}

export default App;
