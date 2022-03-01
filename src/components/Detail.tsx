import React from 'react'
import Navigationbar from '../container/Navigationbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import './Detail.css';
import Footer from '../container/Footer';
import Listfilm from '../container/Listfilm';
import Favorite from './Favorite';
import { useNavigate } from 'react-router';

const Detail = () => {
    let navigate = useNavigate();
    function handleClickFav(){
        navigate('/Favorite')
    }
    return (
        <div className='detail'>
            <Navigationbar/>

            <figure className="movie">
            <div className="movie__hero">
                <img src="/images/encanto-poster.jpeg" alt="Rambo" className="movie__img">
                </img>
            </div>
            <div className="movie__content">
                <div className="movie__title">
                <h1 className="heading__primary">Encanto<i className="fas fa-fire"></i></h1>
                <div className="movie__tag movie__tag--1">#fantasy</div>
                <div className="movie__tag movie__tag--2">#comedy</div>
                </div>
                <p className="movie__description">
                Walt Disney Animation Studios’ “Encanto” bercerita tentang keluarga Madrigal, sebuah keluarga yang tinggal di rumah ajaib, yang tersembunyi di daerah pegunungan Kolombia, tepatnya di Encanto, sebuah kota penuh warna yang memukau.
                <a onClick={handleClickFav}>
                    <Button variant="primary" size="sm">
                        Add To Favorite
                    </Button>
                </a>
                </p>
            </div>
            </figure>
            <Footer/>               
        </div>
    )
}

export default Detail