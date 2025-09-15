import React from 'react'
import './BreadCrum.css'
import arrow_icon from '../../Assets/Frontend_Assets/breadcrum_arrow.png'
const BreadCrum = (prop) => {
  const {product} = prop;
  return (
    <div className='breadCrum'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="/" /> {product.category} <img src={arrow_icon} alt="/" /> {product.name}
    </div>
  )
}

export default BreadCrum