import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import MainPost from "../pages/main/main";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <MainPost></MainPost>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      }
    ]
  }
]);

export default router;
