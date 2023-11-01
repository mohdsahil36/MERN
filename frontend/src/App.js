import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import React, { useState, useEffect } from 'react';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import HomePage from './components/HomePage';
import ProductList from './components/PLP';
import ProductDescription from './components/PDP';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='/plp' element={<ProductList/>}/>
          <Route path='/pdp/:item_id' element={<ProductDescription/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
