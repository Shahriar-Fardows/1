
import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root/Root';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Team from '../components/Team/Team';
import Services from '../components/Services/Services';
import ServicesDetails from '../components/ServicesDetails/ServicesDetails';
import PrivateRoute from './PrivateRoute';
import IndustrialDetails from '../components/IndustrialDetails/IndustrialDetails';
import IndustrialProperty from '../components/IndustrialProperty/IndustrialProperty';


const Routes = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
        },
        {
          path:"/about",
          element:<PrivateRoute><About></About></PrivateRoute>,
        },
        {
          path:"/contact",
          element:<PrivateRoute><Contact></Contact></PrivateRoute>,
        },
        {
          path:"/login",
          element:<Login></Login>,
        },
        {
          path:"/register",
          element:<Register></Register>,
        },
        {
          path:"/services",
          element:<Services></Services>
        },
        {
          path:"/services/:id",
          element:<PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
          loader:()=>fetch('/services.json')
        },
        {
          path:"/team",
          element:<Team></Team>,
        },
        {
          path:"/industrialproperty",
          element:<IndustrialProperty></IndustrialProperty>,
        },
        {
          path:"/industrialDetails",
          element:<PrivateRoute><IndustrialDetails></IndustrialDetails></PrivateRoute>,
        }
      ]
    },
  ]);

Routes.propTypes = {
    
};

export default Routes;