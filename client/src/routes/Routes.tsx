import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Homepage, Login, Register, About, Blog, Contact } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
      { path: "/api.id.me/en/session/new", element: <Login /> },
      { path: "/api.id.me/en/registration/new", element: <Register /> },
    ],
  },
]);
