import React, { useContext } from 'react';
import './CartItems.css';
import remove_icon from '../../Assets/Frontend_Assets/cart_cross_icon.png';
import { ShopContext } from '../../Context/Shopcontext';

const CartItems = () => {
  const { all_product, cartItems, removeFromCart ,getTotalCartAmount} = useContext(ShopContext);

  return (
    <div className="cart-items">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id} className="cartitems-format">
              <img src={e.image} alt={e.name} className="cartcon-product-icon" />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className="cartitems-quantity">{cartItems[e.id]}</button>
              <p>${e.new_price * cartItems[e.id]}</p>
              <img
                src={remove_icon}
                onClick={() => removeFromCart(e.id)}
                alt="remove"
                className="cartitems-remove-icon"
              />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-dow">
        <div className="cartitems_total">
            <h1>cart Totals</h1>
            <div>
                <div className='cartitems-total-items'>
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>FREE</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default CartItems;
