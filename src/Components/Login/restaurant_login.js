import React from "react";
import { Link } from "react-router-dom";

function Restaurant_Login(){
    return(
        <div>
            <h1 className='anytime-heading'><span style={{color:'red'}}>Messiah</span> <span style={{color:'blue'}}>Restaurant</span> </h1>
        <div class="signup-form">
      <form>
		<h2>Restaurant Administration</h2>
		 <p>Please fill in this form to login!</p>
		<hr/>
        <div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text">
						<span class="fa fa-user"></span>
					</span>                    
				</div>
				<input type="text" class="form-control" placeholder="Enter registered email" required="required" />
			</div>
        </div>
        
		<div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text">
						<i class="fa fa-lock"></i>
					</span>                    
				</div>
				<input  class="form-control" name="password" placeholder="Password" required="required" type="password"/>
			</div>
        </div>

		<div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg">Login</button>
        </div>
		<div class="text-center">Customer Login? <Link to="/">Click here</Link></div>
    </form>
    </div>
        </div>
    );
}

export default Restaurant_Login;