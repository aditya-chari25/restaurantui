import { Link, useNavigate } from 'react-router-dom';
import './form.css'
import 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from '../../api';
function Form(props) {
	let navigate = useNavigate();
	const handleSubmit =(e)=>{
		console.log("Prevent default")
		e.preventDefault();
		API.post('/signin', {
			email: document.getElementById('emailid').value,
			password: document.getElementById('password').value
		})
		.then(res => {
			toast.success('Login Success', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				});
				props.setUser(res.data.user)
				navigate('/dashboard');
			console.log(res.data, res.status)
		})
		.catch(err => {
			console.log("Error")
			toast.error('Invalid Credentials', {
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
        <div class="signup-form">
      <form onSubmit={handleSubmit}>
		<h2>Customer Login</h2>
		 <p>Please fill in this form to login!</p>
		<hr/>
        <div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text">
						<span class="fa fa-user"></span>
					</span>                    
				</div>
				<input type="text" class="form-control" id="emailid" placeholder="Enter registered email" required="required" />
			</div>
        </div>
        
		<div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text">
						<i class="fa fa-lock"></i>
					</span>                    
				</div>
				<input  class="form-control" name="password" id="password" placeholder="Password" required="required" type="password"/>
			</div>
        </div>

		<div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg">Login</button>
        </div>
        <div class="text-center">Don't have an account? <Link to="/signup">Sign Up here</Link></div>
		<div class="text-center">Restaurant Login? <Link to="/restaurant_login">Click here</Link></div>
    </form>
    </div>
    </div>
  );
}

export default Form;