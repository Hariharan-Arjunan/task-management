import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import TaskForm from "./containers/TaskForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>Not Found</p>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/task_form/:id?", element: <TaskForm /> },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
