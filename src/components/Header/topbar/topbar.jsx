import React from 'react'

function Topbar() {
    return (
        <div>
            <div className='flex flex-row justify-between'>
                <div className="left">
                    <h2 className='text-3xl font-semibold'>FlexTv</h2>
                </div>
                <div className="right flex flex-row">
                    <h2 className='pr-4'>Github</h2>
                    <ul className='flex flex-row'>
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