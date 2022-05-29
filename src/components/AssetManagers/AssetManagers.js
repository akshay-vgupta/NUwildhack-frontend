import React from 'react';
import PropTypes from 'prop-types';
import './AssetManagers.css';

const AssetManagers = () => (
  <div class="asset-managers" id="asset-managers"> 
  <div class="basket-wrapper">
      <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action">
          <div class="image-basket-container">
              <img src="https://picsum.photos/100" class="img-thumbnail" alt="..."/>
              <div class="basket-content">
                  <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">List group item heading</h5>
                  </div>
                  <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small>Donec id elit non mi porta.</small>
              </div>
          </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
              <div class="image-basket-container">
                  <img src="https://picsum.photos/100" class="img-thumbnail" alt="..."/>
                  <div class="basket-content">
                      <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">List group item heading</h5>
                      </div>
                      <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                      <small>Donec id elit non mi porta.</small>
                  </div>
              </div>
            </a>
              <a href="#" class="list-group-item list-group-item-action">
                  <div class="image-basket-container">
                      <img src="https://picsum.photos/100" class="img-thumbnail" alt="..."/>
                      <div class="basket-content">
                          <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1">List group item heading</h5>
                          </div>
                          <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                          <small>Donec id elit non mi porta.</small>
                      </div>
                  </div>
              </a>
      </div>
  </div>
</div>
);

AssetManagers.propTypes = {};

AssetManagers.defaultProps = {};

export default AssetManagers;
