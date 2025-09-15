import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../../Assets/Frontend_Assets/star_icon.png'
import star_dull_icon from '../../Assets/Frontend_Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/Shopcontext'
const ProductDisplay = (prop) => {
    const {product} = prop;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className="productdisplay-img">
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-smallimg">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h2>{product.name}</h2>
            <div className="productdisplay-rating">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(20 Reviews)</p>
            </div>
            <p className='productdisplay-price'>${product.new_price} <span className='old-price'>{product.old_price}</span></p>
            <p className='productdisplay-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima rem autem quidem quis quam ullam similique. Architecto minima saepe rerum adipisci quos impedit fugiat amet tempora esse, exercitationem commodi consectetur! Nesciunt quos mollitia praesentium cupiditate, asperiores qui rem voluptatibus accusantium.</p>
            <div className="productdisplay-size">
                <h3>Size</h3>
                <select name="size" id="size">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">X-Large</option>
                </select>
            </div>
            <div className="category">
                <h3>Category</h3>
                <p>{product.category}</p>    
            </div> 
            <button className='add-to-cart-button' onClick={()=>{addToCart(product.id)}}>Add to Cart</button> 
            <div className="product-share">
                <h3>Share:</h3>
                <img src="https://img.icons8.com/ios-filled/50/000000/facebook--v1.png" alt="" />
                <img src="https://img.icons8.com/ios-filled/50/000000/twitter--v1.png" alt="" />
                <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="" />    
            </div>  

        </div>

        
    </div>
  )
}

export default ProductDisplay