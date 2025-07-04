import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='item'>
     <Link to={`/product/${props.id}`}> <img src={props.image} alt="" /></Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
        new-price :   {props.new_price}
        </div>
        <div className="item-price-old">
         old-price: {props.old_price}
        </div>
      </div>
      {/* <Link to='/cart'>  <button>Add to cart</button></Link> */}
    </div>
  )
}

export default Item
