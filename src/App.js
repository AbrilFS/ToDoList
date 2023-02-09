import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./ToDoSearch";
import { TodoItem } from "./ToDoItem";
import { TodoList } from "./ToDoList";
import { CreateToDoButton } from "./CreateToDoButton";
//import './App.css';

//Creamos un array de objetos con los ToDos
const todos = [
  {text: 'Levantarse', completed: false},
  {text: 'Desayunar', completed: false},
  {text: 'Estudiar', completed: false}
]    

function App() {
  return(
    <>
      <TodoCounter/>
       
      <TodoSearch/>
        
      <TodoList>
         {todos.map (todo => <TodoItem/>)}
      </TodoList>

      {<CreateToDoButton/>}
      
    </>
  );
}

export default App;
