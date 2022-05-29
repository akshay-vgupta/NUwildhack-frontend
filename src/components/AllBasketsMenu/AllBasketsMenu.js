import React from 'react';
import PropTypes from 'prop-types';
import './AllBasketsMenu.css';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios'
const AllBasketsMenu = () => {
  const [show, setShow] = useState(false);
  const [item,setItem] = useState(-1)
  const [baskets, setBaskets] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/baskets',{
      headers : {'Access-Control-Allow-Origin':'*'},
      crossorigin:true
    }).then(response => {
      console.log("**SUCCdSS", response.data)
      setBaskets(response)
      console.log("**SUCCEafdSS", baskets)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  const handleClose = (item) => {
    setShow(false);
  }
  const handleShow = (e) => 
  {setShow(true);
    console.log(e.currentTarget.getAttribute('index'))
    setItem(e.currentTarget.getAttribute('index'))
  }
  const setCheck = e =>{
    
  }
  const handlesubmit = (e) =>{
    const json = {
      email: 'az@yop',
      basketid:baskets.data[item].id,
      quantity:'1'
    }
    console.log(json)
    axios.post('http://localhost:5000/investedbaskets',json,{
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response);
      setShow(false);
    }, (error) => {
      console.log(error);
    });
  }
  return baskets.data?(
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
      {baskets.data[item]?(<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{baskets.data[item].name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{baskets.data[item].description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>{handlesubmit(e)}}>
            Buy This Basket
          </Button>
        </Modal.Footer>
      </Modal>):null
}
    <div class="basket-wrapper">
        <div class="list-group">
          {baskets.data.map((item,index)=>(
            <a href="#" index={index} class="list-group-item list-group-item-action" onClick={(e) => handleShow(e)}>
            <div class="image-basket-container">
                <img src={item.imageurl} class="img-thumbnail" alt="..."/>
                <div class="basket-content">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">{item.name}</h5>
                    </div>
                    <p class="mb-1">{item.description}</p>
                    <div style={{textAlign:'left', color: '#808080'}}>{item.id}</div>
                </div>
            </div>
            </a>
            ))}
        </div>
    </div>
    <button type="simpleQuery" style={{margin:'0 auto', width:'20%'}} onClick={(e)=>{setCheck(e)}} class="btn btn-primary">Add to portfolio</button>
</div>
):null;
}
AllBasketsMenu.propTypes = {};

AllBasketsMenu.defaultProps = {};

export default AllBasketsMenu;
