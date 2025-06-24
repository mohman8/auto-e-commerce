import React, { useContext } from 'react';
import './CartItems.css';
import cancel from '../Assests/cancel.png';
import { ShopContext } from '../../Context/ShopContext';

const CartItems = () => {
  const {getTotalCartAmount, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {Object.values(cartItems).map((item) => (
        <div key={item.id}>
          <div className='cartitems-format cartitems-format-main'>
            <img src={item.image} alt={item.name} className='carticon' />
            <p>{item.name}</p>
            <p>${item.new_price}</p>
            <button className='cartitem-quantity'>{item.quantity}</button>
            <p>${(item.new_price * item.quantity).toFixed(2)}</p>
            <img
              className='carticon-remove-icon'
              src={cancel}
              alt='Remove'
              onClick={() => removeFromCart(item.id)}
            />
          </div>
          <hr />
        </div>
      ))}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-items">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code,enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo-code'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
