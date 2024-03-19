import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItem from "./components/ToDOItem.jsx";
function App() {

  return <center calss="toDoContainer">
    <AppName/>
    <div class="container text-center">

      <AddToDo/>
      
    </div>
    <ToDoItem/>
  </center>


}

export default App;
