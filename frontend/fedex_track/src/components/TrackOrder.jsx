import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const TrackOrder = () => {
  const trackingNumber = useParams().trackingNumber;
  const [orders, setOrders] = useState([
    {
      trackingNumber: '12345',
      status: 'Shipped',
      city: 'New York',
    },
    {
      trackingNumber: '67890',
      status: 'Delivered',
      city: 'San Francisco',
    },
    {
      trackingNumber: '54321',
      status: 'In Transit',
      city: 'Los Angeles',
    },
  ]);

  return (
    <>
      <Navbar />
      <div className='m-10'>
        <div className='flex flex-col items-center mb-10'>
          <svg
            className='h-32 text-orange-400 fill-current'
            id='Layer_1'
            data-name='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 122.88 113.21'
          >
            <title>Courier</title>
            <path
              className='cls-1'
              d='M61.44,0A61.44,61.44,0,1,1,0,61.44,61.44,61.44,0,0,1,61.44,0Zm0,113.21A51.77,51.77,0,0,0,113.21,61.44H61.44ZM61.44,51.77A9.67,9.67,0,1,1,51.77,61.44,9.67,9.67,0,0,1,61.44,51.77Zm0,0'
            />
            <path
              className='cls-2'
              d='M61.44,0A61.44,61.44,0,1,1,0,61.44,61.44,61.44,0,0,1,61.44,0Zm0,113.21A51.77,51.77,0,0,0,113.21,61.44H61.44ZM61.44,51.77A9.67,9.67,0,1,1,51.77,61.44,9.67,9.67,0,0,1,61.44,51.77Zm0,0'
            />
          </svg>
          <p className='text-white font-semibold mt-3'>Tracking Number: {trackingNumber}</p>
        </div>
        <div className='flex flex-col items-center'>
          <ol className='relative text-gray-900'>
            {orders.map((item, index) => (
              <li key={index} className='mb-10 ms-6'>
                <span className='absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700'>
                  <svg
                    className='w-3.5 h-3.5 text-green-500 dark:text-green-400'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 16 12'
                  >
                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M0 6l4 4L12 0'></path>
                  </svg>
                </span>
                <h3 className='font-medium leading-tight ml-2'>{item.status}</h3>
                <p className='text-sm ml-3'>Shipping Scanned at {item.city}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default TrackOrder;
