import React from 'react'
import './Popular.css'
import data_product from '../Assests/data'
import Item from '../Items/Item'
import Footer from '../Footer/Footer'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Shop Category</h1>
      <hr />
      <div className="popular-cars">
        {data_product.map((item,i)=>{
         return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>

      <Footer/>
    
    </div>
  )
}

export default Popular
