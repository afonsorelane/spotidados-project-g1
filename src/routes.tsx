import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, UserHistoric, Search, Register, Login, UserData } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/userHistoric",
    element: <UserHistoric />,
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
  {
    path: "/userData",
    element: <UserData />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
