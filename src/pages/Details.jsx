import React from 'react'
import Poster from "../assets/poster.avif"
import Footer from '../components/footer/Footer'
import Topbar from '../components/Header/topbar/topbar'
function Details() {
  return (
    <div className='w-full'>
      <div className='md:h-screen h-full relative'>
        <img src={Poster} alt="" className='w-full h-3/4 object-cover brightness-50' />
        <div className='container top-8 md:left-20 absolute'>
          <Topbar />
        </div>
      </div>
      <div className='container mx-auto pt-10 pb-10'>
        <div className="top flex md:flex-row flex-col md:justify-between md:px-0 px-4 gap-8">
          <div className="left flex flex-col md:w-1/2 w-full">
            <img src={Poster} alt="" className='md:w-11/12 w-full justify-center border rounded-lg object-cover' />
            <h2 className='pt-8 font-bold text-3xl'>Movie Title</h2>
            <p className='pt-8 font-normal text-sm leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at eos alias magnam ut accusantium.</p>
            <div className='pt-8 font-semibold text-sm'>
              <p>Duration: <span className='font-normal text-sm'>100 mins</span></p>
              <p className='pt-2'>Release Date: 22/07/2022</p>
              <div className='flex flex-row pt-2 place-items-center'>
                <p>Language:</p>
                <ul className='flex flex-row gap-1 ml-2'>
                  <li className='border border-lg bg-zinc-300 py-1 px-2'>English</li>
                  <li className='border border-lg bg-zinc-300 py-1 px-2'>Spanish</li>
                  <li className='border border-lg bg-zinc-300 py-1 px-2'>Turkish</li>
                </ul>
              </div>
              <div className='flex flex-row pt-2 place-items-center'>
                <p>Genre:</p>
                <ul className='flex flex-row gap-1 ml-2'>
                  <li className='border border-lg bg-zinc-300 py-1 px-2'>Play</li>
                  <li className='border border-lg bg-zinc-300 py-1 px-2'>Poem</li>
                  <li className='border border-lg bg-zinc-300 py-1 px-2'>Drama</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right md:w-1/2 w-full flex flex-col">
            <h2 className='font-bold text-xl pb-4'>Casts:</h2>
            <div className='flex flex-row flex-wrap md:gap-2 gap-4'>
              <div className='flex flex-col md:w-24 w-24 h-44'>
                <img src={Poster} alt="" className='h-full object-cover border rounded-lg' />
                <h3 className='text-sm pt-1'>Name</h3>
              </div>
              <div className='flex flex-col md:w-24 w-24 h-44'>
                <img src={Poster} alt="" className='h-full object-cover border rounded-lg' />
                <h3 className='text-sm pt-1'>Name</h3>
              </div>
              <div className='flex flex-col md:w-24 w-24 h-44'>
                <img src={Poster} alt="" className='h-full object-cover border rounded-lg' />
                <h3 className='text-sm pt-1'>Name</h3>
              </div>
              <div className='flex flex-col md:w-24 w-24 h-44'>
                <img src={Poster} alt="" className='h-full object-cover border rounded-lg' />
                <h3 className='text-sm pt-1'>Name</h3>
              </div>
              <div className='flex flex-col md:w-24 w-24 h-44'>
                <img src={Poster} alt="" className='h-full object-cover border rounded-lg' />
                <h3 className='text-sm pt-1'>Name</h3>
              </div>
              <div className='flex flex-col md:w-24 w-24 h-44'>
                <img src={Poster} alt="" className='h-full object-cover border rounded-lg' />
                <h3 className='text-sm pt-1'>Name</h3>
              </div>
              <div className='flex flex-col md:w-24 w-24 h-44'>
                <img src={Poster} alt="" className='h-full object-cover border rounded-lg' />
                <h3 className='text-sm pt-1'>Name</h3>
              </div>
              <div className='flex flex-col md:w-24 w-24 h-44'>
                <img src={Poster} alt="" className='h-full object-cover border rounded-lg' />
                <h3 className='text-sm pt-1'>Name</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom flex flex-col mt-12 pt-8 pb-8 bg-red-100">

          <h2 className='text-xl font-bold pb-8 text-center'>Related Videos</h2>
          <div className='flex flex-row md:gap-6 gap-2 flex-wrap md:mx-6 mx-2'>
            <div className='flex flex-col pb-4'>
              <img src={Poster} alt="" className='md:24 w-28 h-48 object-cover' />
              <h3 className='font-normal pt-2 text-sm'>Title</h3>
            </div>
            <div className='flex flex-col'>
              <img src={Poster} alt="" className='md:24 w-28 h-48 object-cover' />
              <h3 className='font-normal pt-2 text-sm'>Title</h3>
            </div>
            <div className='flex flex-col'>
              <img src={Poster} alt="" className='md:24 w-28 h-48 object-cover' />
              <h3 className='font-normal pt-2 text-sm'>Title</h3>
            </div>
            <div className='flex flex-col'>
              <img src={Poster} alt="" className='md:24 w-28 h-48 object-cover' />
              <h3 className='font-normal pt-2 text-sm'>Title</h3>
            </div><div className='flex flex-col'>
              <img src={Poster} alt="" className='md:24 w-28 h-48 object-cover' />
              <h3 className='font-normal pt-2 text-sm'>Title</h3>
            </div>
            <div className='flex flex-col'>
              <img src={Poster} alt="" className='md:24 w-28 h-48 object-cover' />
              <h3 className='font-normal pt-2 text-sm'>Title</h3>
            </div>
            <div className='flex flex-col'>
              <img src={Poster} alt="" className='md:24 w-28 h-48 object-cover' />
              <h3 className='font-normal pt-2 text-sm'>Title</h3>
            </div>
            <div className='flex flex-col'>
              <img src={Poster} alt="" className='md:24 w-28 h-48 object-cover' />
              <h3 className='font-normal pt-2 text-sm'>Title</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Details