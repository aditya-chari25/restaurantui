import logo from './logo.svg';
import './App.css'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Navigate
} from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/Login/form.js';
import Dashboard from './Components/Landing/dashboard.js';
import Profile from './Components/Profile/profile.js';
import Signup from './Components/Login/signup.js';
import Restaurant_Login from './Components/Login/restaurant_login.js';
import Cart from './Components/Cart/cart.js';
import RestDashboard from './Components/RestLanding/restdashboard';
import ProdManagement from './Components/RestLanding/prodmanagement';
import OrderManagement from './Components/RestLanding/ordermanagment';
import ProfPoints from './Components/Profile/profpoints';
import ProfAddress from './Components/Profile/profaddress';
import CustCare from './Components/Profile/custcare';
import ProdCreate from './Components/RestLanding/prodcreate';
import UpdateProd from './Components/RestLanding/updateprod';
import { useState, useEffect } from 'react';
import API from './api';

function App() {
  
  const [user, setUser] = useState(null);
  const changeUser = (user) => {
    setUser(user);
    // console.log("User changed")
  }
  function NotForAuthenticatedUsers(props){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
      API.post('/check')
      .then(res => {
        setIsAuthenticated(true)
        setUser(user)
      })
      .catch(err => {
        console.log(err)
      })
    }, [])  
    if (isAuthenticated)
      return <Navigate to="/dashboard" />
    return props.next; 
    
  }
  // console.log("In app ",user)
  return (
    <div>
    {/* {console.log("In app ",user)} */}
    <Router>
      <div>
        <ToastContainer/>
    <Routes>
          <Route path="/" element={<NotForAuthenticatedUsers next = {<Login setUser={changeUser} />} />} />
          <Route path="/dashboard"  element={<Dashboard user={user} />} />
          <Route path="/profile"  element={<Profile user={user} />} />
          <Route path="/signup" element={<NotForAuthenticatedUsers next = {<Signup />} />}/>
          <Route path="/restaurant_login" element={<Restaurant_Login />}/> 
          <Route path="/cart" element ={<Cart />}/>
          <Route path="/prodmanagement" element={<ProdManagement/>}/>
          <Route path="/ordermanagement" element={<OrderManagement/>}/>
          {/* <Route path="/profile" element={<Profile/>}/> */}
          <Route path="/points" element={<ProfPoints/>}/>
          <Route path="/useraddress" element={<ProfAddress/>}/>
          <Route path="/cc" element={<CustCare/>}/>
          <Route path="/prodcreate" element={<ProdCreate/>}/>
          <Route path="/produpdate" element={<UpdateProd/>}/>
     </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
