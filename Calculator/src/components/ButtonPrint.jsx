// ButtonPrint.jsx
const ButtonPrint = ({ value, recordProblem }) => {
    return <button value={value} onClick={()=>{recordProblem(value);}}>{value}</button>;
  };
  
  export default ButtonPrint;
  