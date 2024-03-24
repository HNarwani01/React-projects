// App.jsx
import Button_container from './components/Button_container';
import DisplayScreen from './components/DisplayScreen';
import styles from './App.module.css';

function App() {

  return (
    <div className={styles.outerDiv}>
        <DisplayScreen/>
      <Button_container  /> 
    </div>
  );
}

export default App;
