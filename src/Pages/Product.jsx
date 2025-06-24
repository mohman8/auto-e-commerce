import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import data_product from '../Components/Assests/data'
const Product = () => {
    // const {data_product}=useContext(ShopContext)
    const {productId} = useParams()
    const product = data_product.find((e)=>e.id === Number(productId))
    return (
      <div>
        <Breadcrums product={product}/>
        <ProductDisplay product={product}/>
      </div>
    )
}

export default Product
