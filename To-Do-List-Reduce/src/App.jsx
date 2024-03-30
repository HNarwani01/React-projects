import React, { useContext, useState, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Thead from "./components/Thead.jsx";
import Tdata from "./components/Tdata.jsx";
import WelcomeMessage from "./components/Welcome.jsx";
import { WorkList } from "./store/WorkList.jsx";

const todoitemReducer = (state, action) => {
  let changes = state;
  if (action.type === 'NEW_ITEM') {
    changes = [...state, {work:action.payload.workTodo,Time:action.payload.time }]
  } else if (action.type === 'REMOVE_ITEM') {
    changes = state.filter((item, index) => index !== action.payload);
  }
  return changes;
}


function App() {
  const [work, dispatchitem] = useReducer(todoitemReducer, [])
  // const toDoItemsFromContext = useContext(WorkList);

  // const [work, setWork] = useState(toDoItemsFromContext);
console.log(work);
  const addToWork = (workTodo, time) => {
    const newitemadd = {
      type: 'NEW_ITEM',
      payload: { workTodo, time },
      
    };
    dispatchitem(newitemadd)

  };
  
  const removefromwork = (i) => {
    console.log(i);
    const itemremove = {
      type: 'REMOVE_ITEM',
      payload: i
    }
    dispatchitem(itemremove)
    
  };
  // if (workTodo !== '' && time !== '') {
  //   setWork((currentValue)=>[...currentValue, {work: workTodo,Time: time}]);
  // }
  // let newWork = [...work]; 
  // newWork.splice(i, 1); 
  
  // setWork(newWork); 
  // const defaultTodo = [{
  //   work: 'Cleaning House',
  //   Time: '20/03/2024'
  // }]
  return (
    <WorkList.Provider value={{ work, removefromwork, addToWork }}>
      <center className="center-tag">
        <table className="table table-success table-striped">
          <Thead />
          <tbody>
            <Tdata />
          </tbody>
        </table>
        <WelcomeMessage />
      </center>
    </WorkList.Provider>
  );
}

export default App;
