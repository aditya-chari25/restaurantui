import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './form.css';
import API from '../../api';
import { toast } from 'react-toastify';


function Signup() {
  let navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    API.post('/signup', {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      password: document.getElementById('p1').value
    })
    .then(res => {
			toast.success('Signup Success', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				});
				navigate('/');
			console.log(res.data, res.status)
		})
		.catch(err => {
			console.log("Error")
      console.log(err.data)
			toast.error('Error in Signing Up', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				});
			console.log(err);
		})
  }
  return (
    <div>
    <h1 className='anytime-heading'><span style={{color:'red'}}>Messiah</span> <span style={{color:'blue'}}>Restaurant</span> </h1>
    <div class="signup-form" >
    <form  onSubmit={handleSubmit}>
		<h2>Customer Sign Up</h2>
		<p>Please fill in this form to create an account!</p>
		<hr/>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-user"></i></span>
            </div>
            <input
              type="text"
              class="form-control"
              name="name"
              id="name"
              placeholder="Name"
              required="required"
            />
          </div>
        </div>
    
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <span class="fa fa-envelope icon"></span>
              </span>
            </div>
            <input
              type="email"
              class="form-control"
              name="email"
              id="email"
              placeholder="Email"
              required="required"
            />
          </div>
        </div>

        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-phone"></i></span>
            </div>
            <input
              type="text"
              class="form-control"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              required="required"
            />
          </div>
        </div>

        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-lock"></i>
              </span>
            </div>
            <input
              class="form-control"
              name="password"
              id="p1"
              placeholder="Password"
              required="required"
              type="password"
              onkeydown="check_pwd_len()"
              onkeyup="check_pwd_len()"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-lock"></i>
                <i class="fa fa-check"></i>
              </span>
            </div>
            <input
              // disabled
              type="password"
              class="form-control"
              name="confirm_password"
              id="p2"
              placeholder="Confirm Password"
              required="required"
              onkeydown="check_pwd()"
              onkeyup="check_pwd()"
            />
          </div>
        </div>

        <div class="form-group">
          <div id="pwd_warning" style={{color: 'red'}}></div>
          <button
            id="signup_btn"
            type="submit"
            // disabled
            class="btn btn-primary btn-lg"
          >
            Sign Up
          </button>
        </div>
        <div class="text-center">If you have an account? <Link to="/">Login here</Link></div>
      </form>
    </div>
    </div>
  );
}

export default Signup;