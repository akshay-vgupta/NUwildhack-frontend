import React from 'react';
import PropTypes from 'prop-types';
import './MyNavbar.css';

const MyNavbar = () => (
  <nav class="navbar navbar-expand-xl">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">StockBasket</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-light " aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Discover</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">WatchList</a>
        </li>
      </ul>
    </div>
    <div class="d-flex">
      <button type="button" class="btn text-light">Current Number of Baskets</button>
      <button type="button" class="btn text-light">All Stocks</button>
      <button type="button" class="btn text-light">Logout</button>
    </div>
  </div>
</nav>
);

MyNavbar.propTypes = {};

MyNavbar.defaultProps = {};

export default MyNavbar;
