import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import MainPost from "../pages/main/main";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import News from "../pages/news/News";
import PrivetRoutes from "./PrivetRoutes";

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
      },
    ]
  },
  {
    path: '/:id',
    element: <PrivetRoutes><News></News></PrivetRoutes>,
    loader: ({ params }) => {
      return fetch(`http://localhost:5000/posts/${params.id}`)
    }
    
  }
]);

export default router;
