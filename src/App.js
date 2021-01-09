
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux'

import { routes } from './Data/RouteData';
import CenterFacilities from './page-components/CenterFacilities';
import Registration from './page-components/Registration';
import LogInPage from './page-components/LogInPage';
import ForgotPassword from './page-components/ForgotPassword';





function App() {

    
    return ( 
      
    <Router>
      <Sidebar></Sidebar>
       <Navbar></Navbar> 
       
      <div className="content-wrapper">
     <Switch>
       {
         routes.map((route, index)=>{
              return   <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={route.main}>
              </Route>
          })}
  
          
    
       
       
       
     </Switch>
     </div>
    
    </Router>
      //<CenterFacilities></CenterFacilities>
    //<Registration></Registration>
    //<LogInPage></LogInPage>
    //<ForgotPassword></ForgotPassword>
   
    );
    
     
   
}
export default App;