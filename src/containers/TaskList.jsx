import React from "react";
import TASK_STATUS from "../constants/TaskStatus";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/tasksSlice";

const TaskList = ({ tasks }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (tasks?.length === 0) return null;

  const filteredTask = tasks;

  return (
    <ul>
      {filteredTask.map((task) => {
        return (
          <li className="task-list">
            <div>
              <input
                className="checkbox"
                type="checkbox"
                checked={task.status === TASK_STATUS.completed}
              />
              <div className="content">
                <h3>{task.title}</h3>

                <Link className="description" to={`/post/edit`}>
                  {task.description}
                </Link>
              </div>
            </div>
            <div className="button-wrapper">
              <button
                className="btn"
                onClick={() => {
                  navigate(`/task_form/${task.id}`);
                }}
              >
                Edit
              </button>
              <button
                className="btn"
                onClick={() => {
                  dispatch(deleteTask({ id: task.id }));
                }}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
