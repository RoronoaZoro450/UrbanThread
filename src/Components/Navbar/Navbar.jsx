import React, { useContext, useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../Assets/Logo.png'
import cart_icon from '../../Assets/Admin_Assets/cart_icon.png'
import { ShopContext } from '../../Context/Shopcontext'

const Navbar = () => {
  const[menu,setMenu] = useState('shop');
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef=useRef();
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
          
        </div>
        <ul ref={menuRef} className='nav-links'>

            <li onClick={()=>{setMenu("shop")}}>
              <Link to="/" style={{textDecoration:'none'}}>Shop</Link>
              {menu==="shop"?<hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("men")}}>
              <Link to="/mens" style={{textDecoration:'none'}}>Men</Link> 
              {menu==="men"?<hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("women")}}>
              <Link to="/womens" style={{textDecoration:'none'}}>Women</Link>
              {menu==="women"?<hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("kids")}}>
              <Link to="/kids" style={{textDecoration:'none'}}>Kids</Link>
              {menu==="kids"?<hr/>:<></>}
            </li>    
        </ul>
        <div className='nav-login-cart'>
          <Link to="/login">
            <button className='login-btn'>Login</button>
          </Link>
          <Link to="/cart">
            <img src={cart_icon} alt="cart" />
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
          </Link> 
        </div>
    </div>
  )
}

export default Navbar