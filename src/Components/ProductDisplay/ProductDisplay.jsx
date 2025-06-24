import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}= useContext(ShopContext)
  return (
    <div className='Productdisplay'>
      <div className="productdisplay-left">
      <div className="productdisplay-img-list">
       <img src={product.image} alt="" />
       <img src={product.image} alt="" />
       <img src={product.image} alt="" />
       <img src={product.image} alt="" />
      </div>
      <div className="productdisplay-img">
        <img className='productdisplay-main-img' src={product.image} alt="" />
      </div>
      </div>
      <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
                {product.old_price}
              </div>  
                <div className="productdisplay-right-price-new">
                    {product.new_price}
                </div>
          </div>      
                <div className="productdisplay-right-description">
                    Experience the perfect balance of sportiness, luxury, and technology with the BMW 330i M Sport. Powered by a 2.0L  TwinPower Turbo engine, this dynamic sedan delivers 255 horsepower and quick, responsive handling  — making  every drive thrilling and refined.

                       The M Sport package  enhances the 3 Series' athletic edge with aggressive styling, aerodynamic body features, and premium 18" alloy wheels.  Inside, enjoy a premium interior with leather upholstery, ambient lighting, a digital instrument cluster, and BMW’s  iDrive 7 infotainment system with Apple CarPlay and  Android Auto.

                       Whether you're cruising the highway or navigating tight  city corners, the BMW 330i M Sport offers  performance,  comfort, and class — all in one sleek package.
                </div>
                <div className="productdisplay-right-color">
                    <h1>select color</h1>
                </div>
                <div className="productdisplay-right-colors">
                    <div>red</div>
                    <div>blue</div>
                    <div>brown</div>
                    <div>white</div>
                    <div>black</div>
                </div>
            
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
          
      </div>
    </div>
  )
}

export default ProductDisplay
