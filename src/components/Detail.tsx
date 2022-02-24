import React from 'react'
import Navigationbar from '../container/Navigationbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import './Detail.css';
import Footer from '../container/Footer';
import Listfilm from '../container/Listfilm';


const Detail = () => {
  return (
    <div className='detail'>
        <Navigationbar/>

        {/* <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
                <div className='video'>
                    <div className='img-thumb'>
                        <img
                            className="d-block w-100"
                            src="/images/gambar1.webp"
                            alt="First slide"
                        />
                    </div>
                    <p className='time'>18.20</p>
                    <Card.Title>Encanto</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </div>
            </Card.Body>
        </Card> */}

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
            <a href='favorite'>
                <Button variant="primary" size="sm">
                    Add To Favorite
                </Button>
            </a>
            </p>
            
            
            {/* <div className="movie__details">
                <p className="movie__detail"><span className="icons icons-grey"><i className="fas fa-clock"></i> </span>1h 33m</p>
            </div> */}
        </div>
        </figure>

        {/* <div className="wrapper">
            <div className="main_card">
                <div className="card_left">
                    <div className="card_datails">
                        <h1>Mission: Impossible – Fallout</h1>
                        <div className="card_cat">
                            <p className="PG">PG - 13</p>
                            <p className="year">2018</p>
                            <p className="genre">Action | Adventure </p>
                            <p className="time">2h 28m</p>
                        </div>
                        <p className="disc">Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.</p>
                        <a href="https://www.imdb.com/title/tt4912910/" target="_blank">Read More</a>
                    <div className="social-btn">
                
                        <button>
                            <i className="fas fa-play"></i> SEE TRAILER
                        </button>
                        
                        <button>
                            <i className="fas fa-download"></i> DOWNLOAD
                        </button>
                        
                        <button>
                            <i className="fas fa-thumbs-up"></i> 97%
                        </button>
                        
                        <button>
                            <i className="fas fa-star"></i>
                        </button>
                    </div>	
                    </div>
                </div>
                <div className="card_right">
                    <div className="img_container">
                        <img src="images/jaemin1.jpg" alt="">
                        </img>
                        </div>
                        <div className="play_btn">
                            <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
                                <i className="fas fa-play-circle"></i>
                            </a>
                        </div>
                    </div>
            </div>
        </div> */}

        <Listfilm/>
        
        <Footer/>               
    </div>
  )
}

export default Detail