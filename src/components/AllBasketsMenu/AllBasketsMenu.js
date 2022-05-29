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
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const setCheck = e =>{
    
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    <div class="basket-wrapper">
        <div class="list-group">
          {baskets.data.map(item=>(
            <a href="#" class="list-group-item list-group-item-action" onClick={handleShow}>
            <div class="image-basket-container">
                <img src={item.imageurl} class="img-thumbnail" alt="..."/>
                <div class="basket-content">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">{item.name}</h5>
                    </div>
                    <p class="mb-1">{item.description}</p>
                    <div style={{textAlign:'left', color: '#808080'}}>{item.riskType}</div>
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
