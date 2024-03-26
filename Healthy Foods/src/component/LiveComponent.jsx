import styles from './LiveComponent.module.css';
import {useState} from 'react';
const LiveComponent =({changeList})=>{
    
    let initial= useState('this is the default text');
    let firstText = initial[0];
    let changetextlive = initial[1];
return <>
    <div className={styles.LiveComponent}>
        <input type="text" placeholder='Enter text here' 
        onChange={()=>{changetextlive(event.target.value)}} 
        onKeyDown={(event)=>{if(event.key==='Enter'){changeList(event.target.value); event.target.value=''}}}
        />
        <p className='changeText'>{firstText}</p>
    </div>
</>
}
export default LiveComponent;