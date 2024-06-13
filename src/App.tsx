import "./App.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import ErrorPage from "./components/Error/ErrorPage";
import SinglePostPage from "./components/SinglePostPage/SinglePostPage";
import Layout from "./components/Home/Layout";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":id",
        element: <SinglePostPage />,
      },
    ],
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
