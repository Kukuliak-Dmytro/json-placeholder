import Users from "../pages/Users/Users";
import Info from "../pages/Info/Info";
import UserPage from "../pages/UserPage/UserPage";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
      path: "/users",
      element: <Users/>,
      
    },
    {
      path: "/users/:id",
      element: <UserPage/>,
    },
    {
      path: "/info",
      element: <Info/>,
    }
  ]);
  
export default router;