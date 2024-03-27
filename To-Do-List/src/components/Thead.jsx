import { useState } from "react";

const Thead = ({addtowork}) => {
    const [worktodo, setworktodo] = useState();
    const handlework=(item)=>{
        setworktodo(item);
    }
    const [whentodo, setwhentodo] = useState();
    const handletime=(item)=>{
        setwhentodo(item)
    }
    const handleAddButtonClick = () => {
        if (worktodo && whentodo) {
          addtowork(worktodo, whentodo);
          setworktodo(''); // Clearing input fields after adding task
          setwhentodo('');
        }
      };
    return <>
        <thead>
            <tr>
                <th scope="col">Count</th>
                <th scope="col" className="input-work"><input type="text" placeholder="What to do?" onChange={(event)=>{handlework(event.target.value);}} value={worktodo}/></th>
                <th scope="col" className="input-date"><input value={whentodo} type="date" name="" id=""onChange={(event)=>{
                    handletime(event.target.value);
                }} /></th>
                <th scope="col" className="input-submit"><button onClick={handleAddButtonClick} className="hr-btn btn btn-success">Add</button></th>
            </tr>
        </thead>
    </>
}
export default Thead;