import {  useRef } from "react";

const Thead = ({addtowork}) => {
    const toDoNameElement = useRef();
    const dueDateElement = useRef();
    const handleAddButtonClick = () => {
        let worktodo = toDoNameElement.current.value;
        let whentodo = dueDateElement.current.value;
        toDoNameElement.current.value =''
        dueDateElement.current.value =''
        if (worktodo && whentodo) {
          addtowork(worktodo, whentodo);
          
        }
      };
    return <>
            
    <thead>
        <tr>
            <th scope="col">Count</th>
            <th scope="col" className="input-work">
                <input type="text" placeholder="What to do?" ref={toDoNameElement} />
            </th>
            <th scope="col" className="input-date">
                <input type="date" ref={dueDateElement} />
            </th>
            <th scope="col" className="input-submit">
                <button className="hr-btn btn btn-success" onClick={handleAddButtonClick}>Add</button>
            </th>
        </tr>
    </thead>


    </>
}
export default Thead;