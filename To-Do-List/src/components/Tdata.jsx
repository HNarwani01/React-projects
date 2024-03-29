import React, { useContext } from 'react';
import { WorkList } from '../store/WorkList';

const Tdata = () => {
  
  const toDoItemsFromContext =useContext(WorkList);
  
  const worksfordo = toDoItemsFromContext.work
  const removeMethod = toDoItemsFromContext.removefromwork;
  return (
    worksfordo.map((element,index)=>{
      return(
      <tr key={index}>
        <td>{index+1}</td>
      <td>{element.work}</td>
      <td>{element.Time}</td>
      <td><button onClick={()=>{removeMethod(index)}} className="hr-btn btn btn-danger">Delete</button></td>
    </tr> 
      )
    })
    
  );
}

export default Tdata;
{/* <tr>
        <td>{index+1}</td>
      <td>{value.work}</td>
      <td>{value.Time}</td>
      <td><button onClick={()=>{removefromwork(index)}} className="hr-btn btn btn-danger">Delete</button></td>
    </tr> */}