import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './StockList.css';
import {useEffect} from 'react';
import axios from 'axios'
import { MenuItemUnstyled } from '@mui/base';

const StockList = () => {
  const [getMessage, setGetMessage] = React.useState([])
  const [userStocks, setUserStocks] = useState({
    stockList:[]
  });
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

  const handlechange = (e) =>{
    const { value, checked } = e.target;
    const {stockList} = userStocks; 
    if(checked){
      setUserStocks({
        stockList:[...stockList,value]
      })
    }else{
      setUserStocks({
        stockList:stockList.filter((e)=>e !== value)
      })
    }
  }
  const getAllCheck = e => {
    var l = userStocks.stockList.length
    var q = 100/l;
    var json = userStocks.stockList.reduce((json, value, key) => { json[value] = q; return json; }, {});
    console.log(json)
  }
  return getMessage.data ? (
    <div style={{display:'flex', flexDirection:'column', paddingTop:'20px'}}>
    {getMessage.data.slice(0,10).map(item =>(
    <div class="form-check" style={{margin:'0 auto', padding:'10px'}}>
    <input class="form-check-input" type="checkbox" value={item.T} id="defaultCheck1" onChange={handlechange}/>
    <label class="form-check-label" for="defaultCheck1">
      {item.T}
    </label>
    <label class="form-check-label" for="defaultCheck1">
      {item.name}
    </label>
    <label class="form-check-label" for="defaultCheck1">
      {item.c}
    </label>
  </div>
    ))}
<button type="simpleQuery" style={{margin:'0 auto', width:'20%'}} onClick={(e)=>{getAllCheck(e)}} class="btn btn-primary">Add to portfolio</button>
</div>
//   <div class="list-group">
//     {getMessage.data.slice(0,20).map(item =>( <a href="#" class="list-group-item list-group-item-action" aria-current="true">
//     <div class="d-flex w-100 justify-content-between">
//       <h5 class="mb-1">{item.T}</h5>
//       <small>{item.c}</small>
//     </div>
//     <p class="mb-1">{item.v}</p>
//     <small>{item.name}</small>
//   </a>))}

// </div>

):null;
  }

StockList.propTypes = {};

StockList.defaultProps = {};

export default StockList;
