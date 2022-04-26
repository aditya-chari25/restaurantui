import React from "react";
import RestNavbar from "../RestNavbar/restnavbar";
import './restdashboard.css';
import food1 from './images/food.png'
import { Link } from "react-router-dom";

function RestDashboard(){
    return(
        <div>
            <div class="restdashboard-grid-container">
            <div class="restdashboard-item1">
                 <h2 id='#anytime-navlink'><span style={{color:'white'}}>AnyTime</span> <br></br><span style={{color:'white'}}>Food</span> </h2>
                 <ul className="restdashboard-table">
                     <h3 style={{color:'white',marginTop:'-20px'}}>Control Panel</h3>
                     <li className="restdashboard-topics">
                     <Link to ="/ordermanagement" style={{color:'white'}}>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="2rem" height="1.2rem"><path fill="white" d="M400 32h-352C21.49 32 0 53.49 0 80v352C0 458.5 21.49 480 48 480h245.5c16.97 0 33.25-6.744 45.26-18.75l90.51-90.51C441.3 358.7 448 342.5 448 325.5V80C448 53.49 426.5 32 400 32zM64 96h320l-.001 224H320c-17.67 0-32 14.33-32 32v64H64V96z"/></svg>
                         Order Management
                     </Link>
                         </li>
                     <li className="restdashboard-topics">
                     <Link to="/prodmanagement" style={{color:'white'}}>
                        <i class="fa fa-cutlery" aria-hidden="true" style={{marginRight:'10px'}}></i>
                     Product Management</Link></li>
                     <li className="restdashboard-topics">
                     <Link to="/prodcreate" style={{color:'white'}}>
                        <i class="fa fa-plus-square-o" aria-hidden="true"style={{marginRight:'10px'}} ></i>
                     Create Product</Link></li>
                     <li className="restdashboard-topics" >
                     <Link to ="/restaurant_login" style={{color:'white'}}>
                     <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="2rem" height="1.2rem" color="white"><path fill="white" d="M160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.67 0 32-14.33 32-32S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32S177.7 416 160 416zM502.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L402.8 224H192C174.3 224 160 238.3 160 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C515.1 266.1 515.1 245.9 502.6 233.4z"/></svg></span>
                     Log Out
                     </Link>
                     </li>
                 </ul>
            </div>
            <div class="restdashboard-item2">Restaurant Management System</div>
            <div class="restdashboard-item4">Main</div>  
        </div>
        </div>
    );
}

export default RestDashboard;