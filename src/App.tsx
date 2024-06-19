import "./App.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import ErrorPage from "./components/Error/ErrorPage";
import SinglePostPage from "./components/SinglePostPage/SinglePostPage";
import Layout from "./components/Home/Layout";
import Contact from "./components/Contact/Contact";
import { store } from "./redux/createStore";
import { Provider } from "react-redux";

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
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  }
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
