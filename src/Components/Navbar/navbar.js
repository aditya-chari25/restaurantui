import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DropdownButton from "react-dropdown";
function Navbar(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{marginLeft:'100px'}}>
        <div class="navbar-brand">
        <h3 id='#anytime-navlink'><span style={{color:'orange'}}>Messiah</span> <br></br><span style={{color:'red'}}>Restaurant</span> </h3>
        </div>
        <form class="form-inline my-2 my-lg-0" style={{marginLeft:'100px'}}>
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search By Pincode"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
        </form>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:'20vw'}}>
          <ul class="navbar-nav mr-auto" >
          <li class="nav-item active">
              <div class="nav-link" href="#" id="anytime-navlink">
                Hello {props.user? props.user: "Guest"}
                {console.log(props.user)}
              </div>
            </li>
            <li class="nav-item active" style={{marginLeft:'3.5vw'}}>
              <Link to="/dashboard" class="nav-link" id="anytime-navlink">
                Home 
              </Link>
            </li>
            <li class="nav-item active" style={{marginLeft:'3.5vw'}}>
              <Link to = "/cart" class="nav-link" id="anytime-navlink">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
              </svg>
              </Link>
            </li>
            <li class="dropdown" style={{marginLeft:'3.5vw'}}>
            <Link to ='/profile'>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
            </Link>
            </li>
            
            
          </ul>
          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
