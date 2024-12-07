import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import { RouterProvider } from "react-router";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
