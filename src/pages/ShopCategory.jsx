import React from 'react'
import './CSS/ShopCategory.css'
import { useContext } from 'react'
import { ShopContext } from '../Context/Shopcontext'
import dropdown_icon from '../Assets/Frontend_Assets/dropdown_icon.png'
import Items from '../Components/Items/Items'
const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="category-items">
        {all_product.map((item,i)=>{
          if(item.category===props.category){ 
          return(
            <Items key={i}
            id={item.id} 
            name={item.name} 
            image={item.image}  
            new_price={item.new_price} 
            old_price={item.old_price} />
          )
        }
        else{
            return null
            }
        
        })}

      </div>
      <div className="loadmore">
        Load More
        <img src={dropdown_icon} alt="" />
      </div>

    </div>
  )
}

export default ShopCategory