import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Page/Home";
import Product from "./Page/Product";
import LogIn from "./Page/LogIn";
// import Singup from "./Page/Singup";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/login" element={<LogIn/>}></Route>
      {/* <Route path="/Singup" element={<Singup/>}></Route> */}
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
