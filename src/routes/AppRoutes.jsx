import Home from "../pages/Home/Home";
import Info from "../pages/Info/Info";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home/>,
    },
    {
      path: "/info",
      element: <Info/>,
    }
  ]);
  
export default router;