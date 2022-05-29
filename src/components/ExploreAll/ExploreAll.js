import React from 'react';
import PropTypes from 'prop-types';
import './ExploreAll.css';

const ExploreAll = () => (
  <div class="explore" id="explore">
  <div class="container">
    <div class="row row-cols-2">
      <div class="col">
        <div class="card">
          <div class="card-header">
            Featured
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-header">
            Featured
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="row row-cols-4">
    <div class="col">
      <div class="card-wrapper">
          <div class="card" style={{width: '18rem'}}>
            <img src="https://picsum.photos/200" class="card-img-top" alt="..."/>
            <div class="card-body">
            <p class="card-text">Tech Stocks</p>
            <footer class="blockquote-footer">Akshay Gupta</footer>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
    </div>
    <div class="col">
      <div class="card-wrapper">
          <div class="card" style={{width: '18rem'}}>
            <img src="https://picsum.photos/200" class="card-img-top" alt="..."/>
            <div class="card-body">
            <p class="card-text">Tech Stocks</p>
            <footer class="blockquote-footer">Akshay Gupta</footer>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
    </div>
    <div class="col">
      <div class="card-wrapper">
          <div class="card" style={{width: '18rem'}}>
            <img src="https://picsum.photos/200" class="card-img-top" alt="..."/>
            <div class="card-body">
            <p class="card-text">Tech Stocks</p>
            <footer class="blockquote-footer">Akshay Gupta</footer>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
    </div>
    <div class="col">
      <div class="card-wrapper">
          <div class="card" style={{width: '18rem'}}>
            <img src="https://picsum.photos/200" class="card-img-top" alt="..."/>
            <div class="card-body">
            <p class="card-text">Tech Stocks</p>
            <footer class="blockquote-footer">Akshay Gupta</footer>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>
</div>
);

ExploreAll.propTypes = {};

ExploreAll.defaultProps = {};

export default ExploreAll;
