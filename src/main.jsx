import {
  RouterProvider,
} from "react-router";
import  router  from "./routes/AppRoutes";
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import { UsersProvider } from "./providers/usersProviders";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <UsersProvider>
      <RouterProvider router={router} />
    </UsersProvider>
  </React.StrictMode>
);
