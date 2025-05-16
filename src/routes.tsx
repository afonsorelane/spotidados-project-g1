import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, User, Search, Register, Login } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/search",
    element: <Search />,
  },
    {
    path: "/register",
    element: <Register />,
  },
      {
    path: "/login",
    element: <Login />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
