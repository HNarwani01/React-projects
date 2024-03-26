// App.jsx
import Button_container from './components/Button_container';
import DisplayScreen from './components/DisplayScreen';
import styles from './App.module.css';
import { useState } from 'react';

function App() {
  const [problem, setProblem] = useState('');
  const recordProblem = (item) => {
    if (item==='C') {
      setProblem('')
    }else if(item==='='){
      let solution = eval(problem);
      setProblem(solution)
    }
    else{
      const newItem =  problem + item;
      setProblem(newItem)
    }
  }
  
  return (
    <div className={styles.outerDiv}>
        <DisplayScreen problem={problem}/>
      <Button_container  recordProblem={recordProblem}/> 
    </div>
  );
}

export default App;
