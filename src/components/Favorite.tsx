import React from 'react'
import Footer from '../container/Footer'
import Listfilm from '../container/Listfilm'
import Navigationbar from '../container/Navigationbar'
import Detail from './Detail'
import './Favorite.css'

const movies =['1','2','3','4','5','6','1','2','3','4','5','6'];

const Favorite = () => {
  return (
    <div>
        <Navigationbar/>

        <div className="container-video-favorite">
          {/* {movies.map(movie=>(
            <Listfilm/>
          ))} */}
        </div>

        <Footer/>
    </div>
  )
}

export default Favorite