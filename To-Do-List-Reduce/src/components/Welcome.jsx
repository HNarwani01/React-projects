import { WorkList } from "../store/WorkList";
import { useContext } from "react";
const WelcomeMessage = () => {
    const toDoItemsFromContext = useContext(WorkList);
    const worksfordo = toDoItemsFromContext.work
    return (worksfordo.length===0 && (<h1><center>Enjoy your day</center></h1>));
}

export default WelcomeMessage;
