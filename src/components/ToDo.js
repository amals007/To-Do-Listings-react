import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrashCan,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

function ToDo({ toDo, setUpdateData, deleteTask, markDone }) {
  return (
    <>
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <div id={task.id}>
                <div className="row">
                  <div className="col-4"></div>
                  <div className="taskBg col-4">
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
                        <span
                          title="Edit"
                          onClick={() =>
                            setUpdateData({
                              id: task.id,
                              title: task.title,
                              status: task.status ? true : false,
                            })
                          }
                        >
                          <FontAwesomeIcon
                            className="fontAwesomeIconColor"
                            icon={faPen}
                          />
                        </span>
                      )}

                      <span title="Delete" onClick={() => deleteTask(task.id)}>
                        <FontAwesomeIcon
                          className="fontAwesomeIconColor"
                          icon={faTrashCan}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="col-4"></div>
                </div>
              </div>
            );
          })}
    </>
  );
}

export default ToDo;
