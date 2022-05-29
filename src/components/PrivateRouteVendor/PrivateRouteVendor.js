import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PrivateRoute.css';
import axios from 'axios'
const PrivateRouteVendor = () => 
{
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const loginVendor = (e) =>{
    e.preventDefault();
    
    axios.post('/login', {
      email: email,
      password: password
    })
    .then((response) => {
      window.location.href = '/home';
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

return(
<form style={{width:'30%',margin:'0 auto'}}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" value={email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) =>setEmail(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1"  class="form-label" >Password</label>
    <input type="password" value={password} class="form-control" id="exampleInputPassword1" onChange={(e) =>setPassword(e.target.value)}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="simpleQuer" onClick={(e)=>{loginVendor(e)}} class="btn btn-primary">Submit</button>
</form>
);
}
PrivateRouteVendor.propTypes = {};

PrivateRouteVendor.defaultProps = {};

export default PrivateRouteVendor;
