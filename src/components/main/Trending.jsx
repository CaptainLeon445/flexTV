import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Placeholder from "../../assets/blank.png";

function Trending() {
    const [Data, setData] = useState([])
    const [Clicked, setClicked] = useState(false)
    const [Clicked1, setClicked1] = useState(false)
    const [Clicked2, setClicked2] = useState(false)

    const img_path = "https://image.tmdb.org/t/p/original"
    const movie = "https://api.themoviedb.org/3/trending/movie/day?api_key=75a2f69d31ae8a963d53a3e8b2a9943a"
    const tv = "https://api.themoviedb.org/3/trending/tv/day?api_key=75a2f69d31ae8a963d53a3e8b2a9943a"
    const persons = "https://api.themoviedb.org/3/trending/person/day?api_key=75a2f69d31ae8a963d53a3e8b2a9943a"

    useEffect(() => {
        setClicked(true)
        setClicked1(false)
        setClicked2(false)
        axios.get(movie)
            .then((res) => {
                const result = res.data.results.map((data) => {
                    return {
                        id: data.id,
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
    const handleClick = (e) => {

        if (e.target.innerHTML === "Movies") {
            setClicked(true)
            setClicked1(false)
            setClicked2(false)
            axios.get(movie)
                .then((res) => {
                    const result = res.data.results.map((data) => {
                        return {
                            id: data.id,
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

        } else if (e.target.innerHTML === "TV Shows") {
            setClicked1(true)
            setClicked(false)
            setClicked2(false)
            axios.get(tv)
                .then((res) => {
                    const result = res.data.results.map((data) => {
                        return {
                            id: data.id,
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
        } else {
            setClicked2(true)
            setClicked(false)
            setClicked1(false)
            axios.get(persons)
                .then((res) => {
                    console.log(res)
                    const result = res.data.results.map((data) => {
                        return {
                            id: data.id,
                            title: data.name,
                            image: `${img_path + data.profile_path}`,
                            rating: `${data.popularity * 10}%`
                        }
                    })
                    setData(result)

                })
                .catch((res) => {
                    console.log(res)
                })
        }
    }

    return (
        <div className='container mx-auto pt-6 pb-6'>
            <div className="heading flex flex-col">
                <h2 className='font-bold text-2xl mx-auto'>Trending</h2>
                <div className="options md:w-2/4 w-full mt-4">
                    <ul className='flex flex-row md:justify-evenly gap-4 place-items-center text-center'>
                        <li className={Clicked ? 'cursor-pointer choose' : 'cursor-pointer'} onClick={handleClick}>Movies</li>
                        <li className={Clicked1 ? 'cursor-pointer choose' : 'cursor-pointer'} onClick={handleClick}>TV Shows</li>
                        <li className={Clicked2 ? 'cursor-pointer choose' : 'cursor-pointer'} onClick={handleClick}>Actors</li>
                    </ul>
                </div>
            </div>
            <div className="list mt-6">
                <div className="card flex flex-row flex-wrap md:justify-between justify-center gap-2">
                    {Data.map((obj) => {
                        return (
                            <div className="flex flex-col transition ease-in-out delay-75 hover:-translate-y-0 hover:scale-105 duration-1000">
                                {/* <img src={obj.image} key={obj.id} alt={obj.title} className='md:w-40 w-24 md:h-56 h-36 border rounded-lg mb-2 object-cover' /> */}
                                <LazyLoadImage src={obj.image}
                                    key={obj.id}
                                    placeholdersrc={Placeholder}
                                    alt={obj.title}
                                    className='md:w-40 w-24 md:h-56 h-36 border rounded-lg mb-2 object-cover'
                                />
                                <p className='pb-4 text-sm text-bold'>{obj.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Trending