import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Heading from './component/Heading';
import Body from './component/Body';
import LiveComponent from './component/LiveComponent';
function App() {

let FootList = useState(['Broccoli','Beets','Spinach',' Kale','Peanut butter']);
let initailFoodList = FootList[0];
let toChangeFoodList = FootList[1];
let mutableChange = (item)=>{
  let newList = [...initailFoodList,item];
  toChangeFoodList(newList);
}

  return (
    <>
      <div className="main">
        <Heading/>
        <LiveComponent  changeList={mutableChange}/>
        <Body value = {initailFoodList}/>
      </div>
    </>
  )
}

export default App
