import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask, getTaskById } from "../features/tasks/tasksSlice";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
  const { id } = useParams();

  const { title, description, dueDate } =
    useSelector((state) => getTaskById(state, id)) || {};

  const { register, handleSubmit, reset } = useForm({
    defaultValues: id ? { title, description, dueDate } : undefined,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmit = (data) => {
    if (id) {
      console.log({ ...data });
      dispatch(editTask({ ...data, id }));
    } else {
      dispatch(addTask(data));
    }
    reset();
    navigate("/");
    console.log(data);
  };

  return (
    <div className="">
      <h1 className="text-4xl font-bold">User Form</h1>
      <form
        className="task-form"
        onSubmit={handleSubmit((data) => {
          formSubmit(data);
        })}
      >
        <div className="form-field">
          <label>Title</label>
          <input className="form-text" {...register("title")} />
        </div>
        <div className="form-field">
          <label>Description</label>
          <textarea className="form-text-area" {...register("description")} />
        </div>
        <div className="form-field">
          <label>DueDate</label>
          <input className="form-text" type="date" {...register("dueDate")} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TaskForm;
