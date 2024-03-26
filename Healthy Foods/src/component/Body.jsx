import React, { useState } from "react";
import SingleItem from "./SingleItem";
import styles from './Body.module.css';

const Body = ({ value }) => {
  let [inList,changeList] = useState([]);
  let showBlueBg=(i)=>{
    let newList = [...inList,i];
    changeList(newList);
  }
  return (
    <>
      {value.map((item, index) => (
          <div className={`${styles.singleSection}  ${inList.includes(index) ? `${styles.active}` : ''}`} key={index}>
          <SingleItem bought={index} Food={item} toChange={showBlueBg}/>
        </div>      
      ))}
    </>
  );
}

export default Body;



// {value.map((item, index) => (
//     <SingleItem Food={item} key={index} />
//   ))}
{/* <div className={styles.singleSection}>
      
      </div> */}