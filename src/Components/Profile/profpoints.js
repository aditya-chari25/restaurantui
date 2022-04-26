import React, {useEffect, useState} from "react";
// import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import './profile.css'
import dp from './dp.jpeg'
import coin from './goldcoin.jpeg';
import { toast } from 'react-toastify';
import { Link , useNavigate } from "react-router-dom";
import API from "../../api";

function ProfPoints(){
  let navigate = useNavigate();
  const [data, setData] = useState(null)
  useEffect(() => {
    API.post('/check')
    .then(res => {
    setData(res.data.user)
    console.log(res.data.user)
    })
    .catch(err =>{
      setData(null)
    })
  }, [])
  const handleLogout = () => {
    API.post("/logout")
      .then(res => {
          toast.success('Logged out successfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      navigate('/')
    })
      .catch(err => {console.log(err)})
  }
    return(
        <div>
            <Navbar user={data?data.name:null} />
            <div class="userprofile-container" style={{width:'80vw',paddingTop:'50px',margin:'auto'}}>
        <div class="profile-header">
          <div class="profile-img">
            <img src={dp}width="200" alt="Profile Image"/>
          </div>
          <div class="profile-nav-info">
            <h3 class="user-name">{data&& data.name}</h3>
             <div class="address">
              <p id="state" class="state">Pincode</p>
              <span id="country" class="country">USA.</span>
            </div> 
      
          </div>
          <div class="profile-option">
            <img
              src={coin}
              alt="coin"
              style={{width: "100%"}}
           />
            <div class="notification">
              <i class="fa fa-bell"></i>
              <span class="alert-message">100</span>
            </div>
          </div>
        </div>
      
        <div class="main-bd">
          <div class="left-side">
            <div class="profile-side">
              <p class="mobile-no"><i class="fa fa-phone"></i> {data&& data.phone} </p>
              <p class="user-mail"><i class="fa fa-envelope"></i> {data&& data.email} </p> 
              <div class="user-bio">
                <h3 style={{textAlign: "center;"}}>{data&& data.email}</h3>
                <h4 style={{textAlign: "center;"}}>Pincode</h4>
                 {/* <p class="bio">
                  Lorem ipsum dolor sit amet, hello how consectetur adipisicing elit. Sint consectetur provident magni yohoho consequuntur, voluptatibus ghdfff exercitationem at quis similique. Optio, amet!
                </p>  */}
              </div>
               <div class="profile-btn">
                <button class="chatbtn" onClick={handleLogout} id="chatBtn"><i class="fa fa-sign-out"></i> Log Out</button>
                <button class="createbtn" id="Create-post"><i class="fa fa-plus"></i> Create</button>
              </div>
               {/* <div class="user-rating">
                <h3 class="rating">4.5</h3>
                <div class="rate">
                  <div class="star-outer">
                    <div class="star-inner">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                  <span class="no-of-user-rate"><span>123</span>&nbsp;&nbsp;reviews</span>
                </div>
      
              </div>  */}
            </div>
      
          </div>
          <div class="right-side">
      
            <div class="userprofile-nav">
            <ul style={{width:'60vw'}}>
                <Link to ="/profile"><li onclick="tabs(0)" class="user-post" style={{color:'black'}}>Past Order</li></Link>
                <Link to ="/points"><li onclick="tabs(0)" class="user-post  active" style={{marginLeft:'20px',color:'black'}}>Points</li></Link>
                <Link to ="/useraddress"><li onclick="tabs(0)" class="user-post" style={{marginLeft:'20px',color:'black'}}>Address</li></Link>
                <Link to ="/cc"><li onclick="tabs(0)" class="user-post" style={{marginLeft:'20px',color:'black'}}>Customer Care</li></Link>
              </ul>
            </div>
            <div class="profile-body">
              <div class="profile-posts-tab">
                <h1>Hello {data&& data.name}</h1>
                <h3> Points In your account is 100.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}

export default ProfPoints;