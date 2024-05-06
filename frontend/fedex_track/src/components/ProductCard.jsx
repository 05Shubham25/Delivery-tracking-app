import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <div className='bg-white shadow-md rounded-md p-4 flex justify-around'>
        <img src={product.image} alt=""  width="80px"/>
        <div>
            <h2 className='text-lg font-semisolid'>{product.name}</h2>
            <h2 className='text-lg font-semisolid'>{product.description}</h2>
        </div>
        <p className='text-gray-500'>{product.price}</p>
        <Link to={`/track/${product.trackingNumber}`} className='bg-blue-500 text-white px-4 hover:bg-teal-600 py-2 rounded-md'>Track Order</Link>
      
    </div>
  )
}

export default ProductCard
