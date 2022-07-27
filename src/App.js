import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import ToDo from "./components/ToDo";
import UpdateForm from "./components/UpdateForm";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const [toDo, setToDo] = useState([]);

  // Temp State
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // Add Task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);

      setNewTask("");
    }
  };

  // Delete Task
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  // mark task as done or completed
  // const markDone = (id) => {
  //   let newTasks = toDo.map((task) => {
  //     if (task.id === id) {
  //       console.log({ ...task, status: !task.status });
  //       return { ...task, status: !task.status };
  //     }

  //     return task;
  //   });
  //   setToDo(newTasks);
  // };

  // cancel Update
  const cancelUpdate = (id) => {
    setUpdateData("");
  };

  // Change task for update
  const ChangeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  // Task
  const updateTask = () => {
    let filterRecords = toDo.filter((task) => task.id !== updateData.id);
    let updateObject = [...filterRecords, updateData];
    setToDo(updateObject);
    setUpdateData("");
  };

  return (
    <div className="container App">
      <br />
      <br />
      <h2>To Do List</h2>
      <br />
      <br />

      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          ChangeTask={ChangeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

     
      <ToDo
        toDo={toDo}
        // markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
