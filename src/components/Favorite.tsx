import React from 'react'
import Footer from '../container/Footer'
import Listfilm from '../container/Listfilm'
import Navigationbar from '../container/Navigationbar'
import Detail from './Detail'

const Favorite = () => {
  return (
    <div>
        <Navigationbar/>

        <Listfilm/>

        <Footer/>
    </div>
  )
}

export default Favorite