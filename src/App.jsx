import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layouts from "./components/layouts/Layouts";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import Acount from "./components/Acount";
import Cart from "./components/Cart";
import Form from "./form/Form";
import FormikForm from "./form/FormikForm";



const router = createBrowserRouter([
    {
      path:'/',
      element:<Layouts/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/account',
          element:<Acount/>
        },
        {
          path:'/cart',
          element:<Cart/>
        },
        {
          path:'/form',
          element:<Form/>
        },
        {
          path:'/formik',
          element:<FormikForm/>
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
