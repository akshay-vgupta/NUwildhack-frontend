import React from 'react';
import PropTypes from 'prop-types';
import styles from './LandingPage.module.css';
import {Link} from 'react-router-dom';
const LandingPage = () => (
  <div>
<div class="card text-center" style={{width:"30%",margin:"10px auto"}}>
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <p class="card-text">Welcome, login as Client</p>
    <Link to="/login"href="#" class="btn btn-primary">Go somewhere</Link>
  </div>
</div>
<div class="card text-center" style={{width:"30%",margin:"10px auto"}}>
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <p class="card-text">Welcome login as vendor</p>
    <Link to="/login" href="#" class="btn btn-primary">Go somewhere</Link>
  </div>
</div>
</div>
);

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
