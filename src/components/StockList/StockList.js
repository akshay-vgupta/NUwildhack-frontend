import React from 'react';
import PropTypes from 'prop-types';
import './StockList.css';
import {useEffect} from 'react';
import axios from 'axios'
import { MenuItemUnstyled } from '@mui/base';

const StockList = () => {
  const [getMessage, setGetMessage] = React.useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/tickerdata',{
      headers : {'Access-Control-Allow-Origin':'*'},
      crossorigin:true
    }).then(response => {
      console.log("**SUCCdSS", response)
      setGetMessage(response)
      console.log("**SUCCEafdSS", getMessage.data)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return getMessage.data ? (
  // <div class="basket-wrapper">
  <div class="list-group">
    {getMessage.data.slice(0,20).map(item =>( <a href="#" class="list-group-item list-group-item-action" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{item.T}</h5>
      <small>{item.c}</small>
    </div>
    <p class="mb-1">{item.v}</p>
    <small>{item.name}</small>
  </a>))}

</div>
// </div>
):null;
  }

StockList.propTypes = {};

StockList.defaultProps = {};

export default StockList;
