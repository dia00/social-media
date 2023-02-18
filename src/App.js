import Profile from "./components/profile/Profile";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/profile",
      element: <Profile/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    { path: "/register",
      element: <Register/>
    }
  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
