import React from 'react'
import ProductCard from './ProductCard'
import first from '../assets/images/1.jpg'
import second from '../assets/images/2.jpg'
import third from '../assets/images/3.jpg'


function Orders() {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            description: 'This is Sample Discription of Product 1',
            price: 100,
            image: first,
            trackingNumber: '123456789'

        },
        {
            id: 2,
            name: 'Product 2',
            description: 'This is Sample Discription of Product 2',
            price: 200,
            image: second,
            trackingNumber: '123456789'

        },
        {
            id: 3,
            name: 'Product 3',
            description: 'This is Sample Discription of Product 3',
            price: 300,
            image: third,
            trackingNumber: '123456789'
        }
    ]
    return (
        <main className='mx-6 lg:mx-48 my-10 grid grid-cols-1 gap-6'>
            <h1 className='text-white font-bold text-3x1'>My orders</h1>
        {products.map(product => (
            <ProductCard key={product.id} product={product} />
        ))}
        </main>

        
    )
}

export default Orders
