import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Placeholder from "../../assets/blank.png";
import { Link } from "react-router-dom";

function TopRated() {
    const [Data, setData] = useState([])
    const [visible, setVisible]=useState(8)
    const [less, setLess]=useState(false)

    const topRated = "https://api.themoviedb.org/3/movie/top_rated?api_key=75a2f69d31ae8a963d53a3e8b2a9943a&language=en-US&page=1"
    const img_path = "https://image.tmdb.org/t/p/original"

    const showMore= (()=>{
        setVisible((more) => more + 8)
        console.log(visible)
        console.log(Data.length)
        if (Math.floor (visible / Data.length) >= 1){
            setLess(true)
        }
    })
    const showLess= (()=>{
        if (visible === 8){
            setLess(false)
        }else{
            setVisible((more) => more - 8)
        }
    })
    useEffect(() => {
        axios.get(topRated)
            .then((res) => {
                const response = res.data.results.map((data) => {
                    return {
                        id: data.id,
                        title: data.title,
                        image: `${img_path + data.backdrop_path}`,
                        date: data.release_date,
                        rating: `${data.vote_average * 10}%`
                    }
                })
                setData(response)
            })
            .catch((err) => { console.log(err) })
    }, [])
    return (
        <div className='flex flex-col justify-center place-content-center'>
            <div className="heading flex flex-row gap-20 justify-around px-2">
                <h2 className='text-2xl font-semibold'>Top Rated</h2>
                <h3 className='text-xl text-red-400 cursor-pointer'>View All</h3>
            </div>
            <div className="list flex md:flex-row flex-col flex-wrap pt-12 md:justify-between px-2">
                {Data.slice(0, visible).map((obj) => {
                    return (
                        <Link to={`details/${obj.id}`}>
                            <div className="card flex flex-col md:gap-2 gap-4 md:w-56 mb-8 transition ease-in-out delay-75 hover:-translate-y-0 hover:scale-105 duration-1000 cursor-pointer">
                                <LazyLoadImage src={obj.image}
                                    placeholdersrc={Placeholder}
                                    alt="Image Alt"
                                    className='border rounded-xl h-60 w-full object-cover'
                                />
                                {/* <img src={obj.image} alt="" className='border rounded-xl h-60 w-full object-cover' /> */}
                                <h2 className='text-sm font-bold'>{obj.title}</h2>
                                <div className="info flex flex-row  justify-between">
                                    <p className='text-sm'>Release Date: {obj.date}</p>
                                    <p className='text-sm font-semibold'>{obj.rating}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className='flex place-content-center '>
                {!less ?<button className='text-xl py-2 w-1/4 border rounded-lg text-white text-center bg-emerald-600' onClick={showMore}>More</button>
                :<button className='text-xl py-2 w-1/4 border rounded-lg text-white text-center bg-emerald-600' onClick={showLess}>Less</button>}
            </div>
        </div>
    )
}

export default TopRated