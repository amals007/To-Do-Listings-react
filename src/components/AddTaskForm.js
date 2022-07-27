import React from "react";

function AddTaskForm({ newTask, setNewTask, addTask }) {
  return (
   <>
        <div className="row">
          <div className='col-4'></div>
          <div className="col-4">
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-2">
            <button onClick={addTask} className="btn btn-lg btn-primary">
              Add Task
            </button>
          </div>
          
        </div>
        <br />
   </>
  );
}

export default AddTaskForm;
