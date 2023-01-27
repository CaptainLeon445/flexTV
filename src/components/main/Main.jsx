import './main.css';
import React from 'react'
import TopRated from './TopRated';
import Trending from './Trending';
import Popular from './Popular';

function Main() {
  return (
    <div className='h-full text-black pt-12'>
      <div className="container mx-auto">
        <TopRated />
      </div>
      <div className='bg-red-50 mt-6'>
        <Trending />
        {/* <Popular />  */}
      </div>
    </div>
  )
}

export default Main