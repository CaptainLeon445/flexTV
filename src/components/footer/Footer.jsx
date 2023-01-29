import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='bg-red-600'>
            <div className="container mx-auto md:px-0 px-8">
                <div className='flex flex-row justify-between text-white py-8'>
                    <Link to="/">
                        <div className="left">FlexTv</div>
                    </Link>
                    <div className="center">Developed by caPTain.</div>
                    <div className="right">Github</div>
                </div>
            </div>
        </div>
    )
}

export default Footer