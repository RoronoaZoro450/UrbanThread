import React from 'react'
import './RelatedProducts.css'
import Items from '../Items/Items'
import data_product from '../../Assets/Frontend_Assets/data'
const RelatedProducts = () => {
  
    return (
    <div className='related-products'>
    <h2>Related Products</h2>
    <hr />
    <div className="related-list">
      {data_product.map((item,i)=>{
          return(
              <Items 
              key={i}
              id={item.id} 
              name={item.name} 
              image={item.image}  
              new_price={item.new_price} 
              old_price={item.old_price} 
                />
          )
      })}
    </div>
    </div>
  )
}

export default RelatedProducts