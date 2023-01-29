import React, { useState } from 'react'
import Poster from "../assets/represent.png"
import Footer from '../components/footer/Footer'
import Topbar from '../components/Header/topbar/topbar'
import { useParams } from "react-router-dom"
import { useEffect } from 'react'
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Placeholder from "../assets/blank.png";

function Details() {
  const [Data, setData] = useState([])
  const [Similar, setSimilar] = useState([])
  const [Suggestion, setSuggestion] = useState([])
  const params = useParams()
  const id = params.id
  const img_path = "https://image.tmdb.org/t/p/original"
  const urls = [
    `https://api.themoviedb.org/3/movie/${id}?api_key=75a2f69d31ae8a963d53a3e8b2a9943a&language=en-US`,
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=75a2f69d31ae8a963d53a3e8b2a9943a&language=en-US`,
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=75a2f69d31ae8a963d53a3e8b2a9943a&language=en-US`
  ]

  useEffect(() => {
    axios.all(urls.map((url) => axios.get(url)))
      .then(
        axios.spread((res, res1, res2) => {
          const data_response = {
            banner: `${img_path + res.data.backdrop_path}`,
            title: res.data.original_title,
            image: `${img_path + res.data.poster_path}`,
            description: res.data.overview,
            duration: res.data.runtime,
            genre: res.data.genres,
            lang: res.data.spoken_languages,
          }
          const response = res1.data.results.map((result) => {
            return {
              id: result.id,
              banner: `${img_path + result.backdrop_path}`,
              title: result.title,
              image: `${img_path + result.poster_path}`,
            }
          })
          const resp = res2.data.results.map((result) => {
            return {
              id: result.id,
              banner: `${img_path + result.backdrop_path}`,
              title: result.title,
              image: `${img_path + result.poster_path}`,
            }
          })

          setData(data_response)
          setSimilar(response)
          setSuggestion(resp)
        })
      )
  }, []);

  return (
    <div className='w-full'>
      <div className='md:h-screen h-full relative'>
        <img src={Data.banner} alt="" className='w-full h-3/4 object-cover brightness-50' />
        <div className='container top-8 md:left-20 absolute'>
          <Topbar />
        </div>
      </div>
      <div className='container mx-auto pt-10 pb-10'>
        <div className="top flex md:flex-row flex-col h-full md:justify-between md:px-0 px-4 gap-8">
          <div className="left flex flex-col md:w-1/2 w-full">
            <div className='md:w-11/12 h-1/2 w-full md:h-[250px] h-[200px] justify-center'>
              {/* <img src={Data.image} alt="" className='h-full w-full object-fit border rounded-lg' /> */}
              <LazyLoadImage src={Data.image}
                placeholdersrc={Placeholder}
                alt="Image Alt"
                className='h-full w-full object-fit border rounded-lg'
              />
            </div>
            <h2 className='pt-8 font-bold text-3xl'>{Data.title}</h2>
            <p className='pt-8 font-normal text-sm leading-relaxed'>{Data.description}</p>
            <div className='pt-8 font-semibold text-sm'>
              <p>Duration: <span className='font-normal text-sm'>{Data.duration} mins</span></p>
              <p className='pt-2'>Release Date: 22/07/2022</p>
              <div className='flex flex-row pt-2 place-items-center'>
                <p>Language:</p>
                <ul className='flex flex-row gap-1 ml-2'>
                  {/* {
                    Data.lang.map((obj) => {
                      return (
                        <li className='border border-lg bg-zinc-300 py-1 px-2'>{obj.name}</li>
                      )
                    })
                  } */}
                </ul>
              </div>
              <div className='flex flex-row pt-2 place-items-center'>
                <p>Genre:</p>
                <ul className='flex flex-row gap-1 ml-2'>
                  {/* {
                    Data.genre.map((obj) => {
                      return (
                        <li className='border border-lg bg-zinc-300 py-1 px-2'>{obj.name}</li>
                      )
                    })
                  } */}
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
        <div className="bottom flex flex-col mt-12 pt-8 pb-16 bg-red-100">

          <h2 className='text-xl font-bold pb-8 text-center'>Related Videos</h2>
          <div className='flex flex-row md:gap-6 gap-2 flex-wrap md:mx-6 mx-2'>
            {
              Similar.map((obj) => {
                return (
                  <div className='md:24 w-28 h-48 flex flex-col pb-4 mb-8' key={obj.id}>
                    <LazyLoadImage src={obj.image} placeholdersrc={Placeholder} alt="" className='object-cover border rounded-lg' />
                    <h3 className='font-normal pt-2 text-sm'>{obj.title}</h3>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="bottom flex flex-col mt-12 pt-8  pb-8 bg-emerald-100">

          <h2 className='text-xl font-bold pb-8 text-center'>You may also like:</h2>
          <div className='flex flex-row md:gap-6 gap-1 flex-wrap md:mx-6 place-content-center'>
            {
              Suggestion.map((obj) => {
                return (
                  <div className='w-24 md:h-48 h-36 flex flex-col pb-4 mb-8' key={obj.id}>
                    <LazyLoadImage src={obj.image} placeholdersrc={Placeholder} alt="" className='object-cover border rounded-lg' />
                    <h3 className='font-normal pt-2 text-sm'>{obj.title}</h3>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Details