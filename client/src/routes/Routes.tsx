import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Homepage, Login } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "/api.id.me/en/session/new", element: <Login /> },
    ],
  },
]);
