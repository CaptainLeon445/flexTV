import React from 'react'
import { Link } from 'react-router-dom'

function Topbar() {
    return (
        <div>
            <div className='flex flex-row justify-between container px-8'>
                <div className="left">
                    <Link to="/">
                        <h2 className='text-3xl font-semibold text-red-600'>FlexTv</h2>
                    </Link>
                </div>
                <div className="right text-white flex md:flex-row flex-col">
                    <h2 className='pr-4'>Github</h2>
                    <ul className='flex md:flex-row flex-col'>
                        <li className='mr-4'>Home</li>
                        <li className='mr-4'>TV Shows</li>
                        <li className='mr-4'>Movies</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Topbar