import { createSlice, nanoid } from "@reduxjs/toolkit";
import TASK_STATUS from "../../constants/TaskStatus";

const initialState = [
  {
    id: nanoid(),
    title: "Title One",
    description: "Description One",
    dueDate: "2024-06-26",
    status: TASK_STATUS.unCompleted,
  },
  {
    id: nanoid(),
    title: "Title Two",
    description: "Description Two",
    dueDate: "2024-06-26",
    status: TASK_STATUS.unCompleted,
  },
  {
    id: nanoid(),
    title: "Title Three",
    description: `Description Three Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Voluptatibus reiciendis nesciunt quae
    assumenda eligendi aliquam eveniet, ipsa molestiae. Facere
    culpa fugiat vitae nesciunt aspernatur dolores officiis
    provident. Odio, saepe tempora?`,
    dueDate: "2024-06-26",
    status: TASK_STATUS.completed,
  },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      const { title, description, dueDate } = action.payload;
      state.push({
        id: nanoid(),
        title,
        description,
        dueDate,
        status: TASK_STATUS.unCompleted,
      });
    },
    editTask(state, action) {
      const { id, title, description, dueDate } = action.payload;
      console.log(action.payload);
      const task = state.find((x) => x.id === id);
      if (task) {
        task.title = title;
        task.description = description;
        task.dueDate = dueDate;
      }
    },
    deleteTask(state, action) {
      const { id } = action.payload;
      return state.filter((x) => x.id !== id);
    },
  },
});

export const getAllTasks = (state) => state.tasks;

export const getTaskById = (state, taskId) =>
  state.tasks.find((x) => x.id === taskId);

export const { addTask, editTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
