import {
  RouterProvider,
} from "react-router";
import  router  from "./routes/AppRoutes";
import React from "react";
import ReactDOM from "react-dom/client";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
