import React from 'react'
import Footer from '../container/Footer'
import Navigationbar from '../container/Navigationbar'
import Favorite from './Favorite'

const PageFavorite = () => {
  return (
    <div>
        <Navigationbar/>
        {/* <Favorite dataMovie={dataMovie}/> */}
        <Footer/>
    </div>
  )
}

export default PageFavorite