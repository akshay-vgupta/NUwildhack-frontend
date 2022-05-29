import React from 'react';
import PropTypes from 'prop-types';
import './AllBasketsMenu.css';

const AllBasketsMenu = () => (
  <div class="all-baskets" id="all-baskets">
  <div class="filter-wrapper">
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
  </div>
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
        </div>
    </div>
</div>
);

AllBasketsMenu.propTypes = {};

AllBasketsMenu.defaultProps = {};

export default AllBasketsMenu;
