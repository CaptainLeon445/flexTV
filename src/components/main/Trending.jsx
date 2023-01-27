import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Trending() {
    const [Data, setData] = useState([])
    const img_path = "https://image.tmdb.org/t/p/original"
    // trending
    const movie = "https://api.themoviedb.org/3/trending/movie/day?api_key=75a2f69d31ae8a963d53a3e8b2a9943a"
    const tv = "https://api.themoviedb.org/3/trending/tv/day?api_key=75a2f69d31ae8a963d53a3e8b2a9943a"
    const persons = "https://api.themoviedb.org/3/trending/person/day?api_key=75a2f69d31ae8a963d53a3e8b2a9943a"

    useEffect(() => {
        axios.get(tv)
            .then((res) => {
                const result = res.data.results.map((data) => {
                    return {
                        title: data.title,
                        overview: data.overview,
                        image: `${img_path + data.poster_path}`,
                        rating: `${data.vote_average * 10}%`,
                        date: data.release_date
                    }
                })
                setData(result)
            })
            .catch((res) => {
                console.log(res)
            })

    }, [])
    return (
        <div className='container mx-auto pt-6 pb-6'>
            <div className="heading flex flex-col">
                <h2 className='font-bold text-xl'>Trending</h2>
                <div className="options w-1/4 mt-4">
                    <ul className='flex flex-row justify-between text-center'>
                        <li className='cursor-pointer choose'>Movies</li>
                        <li className='cursor-pointer point'>TV Shows</li>
                        <li className='cursor-pointer point'>Actors</li>
                    </ul>
                </div>
            </div>
            <div className="list mt-6">
                <div className="card flex flex-row flex-wrap justify-between">
                    {Data.map((obj) => {
                        return (
                            <img src={obj.image} alt="" className='w-40 h-56 border rounded-lg mb-4 object-cover  transition ease-in-out delay-75 hover:-translate-y-0 hover:scale-105 duration-1000' />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Trending