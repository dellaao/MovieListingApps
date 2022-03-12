import { data } from 'jquery';
import React, { useEffect, useState } from 'react';
import Footer from '../container/Footer'
import Listfilm from '../container/Listfilm'
import {} from '../container/Listfilm'
import Navigationbar from '../container/Navigationbar'
import Detail from './Detail'
import './Favorite.css'

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w1280/";
interface IMovie {
  id:string;
  poster_path:string;
  release_date:string;
  title:string;
  vote_average:string;
  overview:string;
  backdrop_path:string;
}
interface FavProps{
  dataMovie:IMovie[]
}

const Favorite = ({dataMovie}:FavProps) => {
  
  return (
    <div>
        <Navigationbar/>
        <div className="container-video-favorite">
        {
            dataMovie && dataMovie.map((dataMovie) =>
              <Listfilm key={dataMovie.id} id={dataMovie.id} poster_path={`${BASE_IMAGE_URL}${dataMovie.poster_path}`} backdrop_path={`${BASE_IMAGE_URL}${dataMovie.backdrop_path}`} title={dataMovie.title} release_date={dataMovie.release_date} vote_average={dataMovie.vote_average} overview={dataMovie.overview}/>
              
              )
          }
          
        </div>

        <Footer/>
    </div>
  )
}

export default Favorite