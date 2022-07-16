import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import './App.css';

function App() {

const [toDo,setToDo] = useState([
  { id: 1, title : 'Task1', status: false },
  { id: 2, title : 'Task2', status: false}
])

// Temp State
const[newTask, setNewTask] = useState('')
const[updateData, setUpdateData] = useState('')

// Add Task
const addTask = () =>{

}

// Delete Task
const deleteTask = (id) =>{

}

// mark task as done or completed
const markDone = (id) => {

}

// cancel Update
const cancelUpdate = (id) =>{

}

// Change task for update
const ChangeTask = (e) =>{

}

// Task
const updateTask = () => {
  
}

  return (
    <div className="container App">
      <br/><br/>
        <h2>To Do List</h2>
      <br/><br/>
      {toDo && toDo.length ? '':'No Tasks'}
    </div>
  );
}

export default App;
