import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyBasketPage.module.css';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios'
const MyBasketPage = () =>{
  const [mybaskets,setMyBaskets] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/investedbaskets/az@yop',{
      headers : {'Access-Control-Allow-Origin':'*'},
      crossorigin:true,
    }).then(response => {
      console.log("**SUCCdSS", response.data)
      setMyBaskets(response)
      //console.log("**SUCCEafdSS", baskets)
    }).catch(error => {
      console.log(error)
    })
  }, [])
  const setCheck = e =>{}
  return mybaskets.data?(
  <div class="all-baskets" id="all-baskets">
    <div class="basket-wrapper">
        <div class="list-group">
          {mybaskets.data.map(item=>(
            <a href="#" class="list-group-item list-group-item-action">
              
            <div class="image-basket-container">
              <img src={item.imageurl} class="img-thumbnail" alt="..."/>
                <div class="basket-content">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">{item.name}</h5>
                    </div>
                    <p class="mb-1">{item.description}</p>
                    <div style={{textAlign:'left', color: '#808080'}}>{item.riskType}</div>
                    <div style={{display:'flex', justifyContent:'space-evenly'}}>
                {item.stocks.map(stock=>(<div>&#9642; Stock:{stock[0]} and Quantity: {stock[1]}</div>))}
                </div>
                </div>
            </div>
            </a>
            ))}
        </div>
    </div>
</div>
):null;
}
MyBasketPage.propTypes = {};

MyBasketPage.defaultProps = {};

export default MyBasketPage;
