import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

function TopRated() {
    const [Data, setData] = useState([])
    const topRated = "https://api.themoviedb.org/3/movie/top_rated?api_key=75a2f69d31ae8a963d53a3e8b2a9943a&language=en-US&page=1"
    const img_path="https://image.tmdb.org/t/p/original"
    
    useEffect(() => {
        axios.get(topRated)
            .then((res) => {
                const response = res.data.results.map((data) => {
                    return {
                        title: data.title,
                        image: `${img_path + data.backdrop_path}`,
                        date: data.release_date,
                        rating: `${data.vote_average * 10}%`
                    }
                })
                setData(response)
                console.log(Data)
            })
            .catch((err) => { console.log(err) })
    }, [])
    return (
        <div className=''>
            <div className="heading flex flex-row justify-between">
                <h2 className='text-2xl font-semibold'>Top Rated</h2>
                <h3 className='text-xl text-red-400 cursor-pointer'>View All</h3>
            </div>
            <div className="list flex flex-row flex-wrap pt-12 justify-between">
                {Data.map((obj) => {
                    return (
                        <div className="card flex flex-col gap-2 w-56 mb-8 transition ease-in-out delay-75 hover:-translate-y-0 hover:scale-105 duration-1000">
                            <img src={obj.image} alt="" className='border rounded-xl h-32 object-cover' />
                            <h2 className='text-sm font-bold'>{obj.title}</h2>
                            <div className="info flex flex-row  justify-between">
                                <p className='text-sm'>Release Date: {obj.date}</p>
                                <p className='text-sm font-semibold'>{obj.rating}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TopRated