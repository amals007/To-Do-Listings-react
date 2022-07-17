import React from "react";

function updateform({ updateData, ChangeTask, updateTask, cancelUpdate }) {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={updateData && updateData.title}
            onChange={(e) => ChangeTask(e)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button onClick={updateTask} className="btn btn-lg btn-warning">
            Update
          </button>
          <button
            onClick={cancelUpdate}
            className="cancelButton btn btn-lg btn-warning"
          >
            Cancel
          </button>
          .
        </div>
      </div>
      <br />
    </>
  );
}

export default updateform;
