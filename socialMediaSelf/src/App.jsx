import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from './component/NavBar'
import HomePage from './component/HomePage'
import ProductFetch from './store/ProductFetch';
import CartPage from './component/CartPage';
import Footer from './component/Footer';
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <ProductFetch>
      <NavBar />
      {/* <HomePage/>
      <CartPage/> */}
      <Outlet/>
      <Footer/>
    </ProductFetch>
  );
}

export default App
