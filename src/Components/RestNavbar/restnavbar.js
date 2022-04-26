import React from "react";
import './restnavbar.css';
import 'react-dropdown/style.css';
function RestNavbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{marginLeft:'100px'}}>
        <div class="navbar-brand">
        <h3 id='#anytime-navlink'><span style={{color:'red'}}>AnyTime</span> <br></br><span style={{color:'blue'}}>Food</span> </h3>
        </div>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:'10vw'}}>
          <ul class="navbar-nav mr-auto" >
          <li class="nav-item active">
              <div class="nav-link" href="#" id="anytime-navlink">
                Restaurant Management System
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default RestNavbar;