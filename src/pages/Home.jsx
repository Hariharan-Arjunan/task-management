import React from "react";
import TaskList from "../containers/TaskList";
import { useNavigate } from "react-router-dom";
import { getAllTasks, getTaskById } from "../features/tasks/tasksSlice";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();

  const tasks = useSelector(getAllTasks);
  console.log(useSelector((state) => getTaskById(state, 2)));
  console.log(tasks);

  return (
    <div className="container">
      <TaskList tasks={tasks} />
      <button className="btn" onClick={() => navigate("/task_form")}>
        Add New Task
      </button>
    </div>
  );
};

export default Home;
