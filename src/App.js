import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar/MyNavbar';
import DashboardMenu from './components/DashboardMenu/DashboardMenu';
import ExploreAll from './components/ExploreAll/ExploreAll';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import StockList from './components/StockList/StockList';

function App() {
  return (
    <Router>
    <div className="App">
  
  <MyNavbar></MyNavbar>
    <Switch>
      <Route extact path ='/Home' >
      <DashboardMenu/>
      </Route>
  <Route extact path ='/stocks'>
    <StockList></StockList>
  </Route>
  </Switch>
    </div>
  </Router>
  );
}

export default App;
