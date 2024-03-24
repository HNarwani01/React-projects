import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Thead from "./components/Thead.jsx";
import Tdata from "./components/Tdata.jsx";

function App() {
  const work = [
    {
      work: 'Washing Dishes',
      Time: '20/03/2024'
    },
    {
      work: 'Cleaning House',
      Time: '20/03/2024'
    }
  ];
  const AddData = (time, work)=>{
    let tempobj = {
      work : work,
      Time : time
    }
    
  }

  return (
    <center className="center-tag">
      <table className="table table-success table-striped">
        <Thead />
        <tbody>
          {work.map((item, index) => (
            <Tdata key={index} value={item} index={index}/>
          ))}
        </tbody>
      </table>
    </center>
  );
}

export default App;
