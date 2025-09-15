import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'
const Items = (prop) => {
  return (
    <div className='items'>
      <Link to={`/product/${prop.id}`}><img src={prop.image} onClick={window.scrollTo(0,0)} alt={prop.name}/></Link>
                        
                        <div className="item-details">
                            <h3>{prop.name}</h3>
                            
                            <p>${prop.new_price}</p>
                     <p className='old-price'>${prop.old_price}</p>
                        </div>
    </div>
  )
}

export default Items