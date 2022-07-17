import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task 1", status: false },
    { id: 2, title: "Task 2", status: false },
  ]);

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
  const markDone = (id) => {
    let newTasks = toDo.map((task) => {
      if (task.id === id) {
        console.log({ ...task, status: !task.status });
        return { ...task, status: !task.status };
      }

      return task;
    });
    setToDo(newTasks);
  };

  // cancel Update
  const cancelUpdate = (id) => {
    setUpdateData("");
  };

  // Change task for update
  const ChangeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true: false
    }
    setUpdateData(newEntry)
  };

  // Task
  const updateTask = () => {};

  return (
    <div className="container App">
      <br />
      <br />
      <h2>To Do List</h2>
      <br />
      <br />

      <div className="row">
        <div className="col">
          <input 
          value={updateData && updateData.title}
          onChange={(e)=>  ChangeTask(e)}
           className="form-control form-control-lg" />
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-warning">Update</button>
          <button className="btn btn-lg btn-warning">Cancel</button>.
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button onClick={addTask} className="btn btn-lg btn-success">
            Add Task
          </button>
        </div>
      </div>

      {toDo && toDo.length ? "" : "No Tasks"}
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment id={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? "done" : ""}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{task.title}</span>
                  </div>
                  <div className="iconsWrap">
                    <span
                      title="Completed / Not Completed"
                      onClick={() => markDone(task.id)}
                    >
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    {task.status ? null : (
                      <span title="Edit"
                      onClick={ ()=> setUpdateData({
                        id: task.id,
                        title: task.title,
                        status:task.status ? true: false
                      })}
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                    )}

                    <span title="Delete" onClick={() => deleteTask(task.id)}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </div>
  );
}

export default App;
