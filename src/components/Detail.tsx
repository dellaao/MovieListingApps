import React from 'react'
import Navigationbar from '../container/Navigationbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Detail.css';


const Detail = () => {
  return (
    <div className='detail'>
        <Navigationbar/>

        <Card>
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
                {/* <Button variant="primary">Tonton</Button> */}
                {/* <button type="button" className="btn">
                    <img
                        className=""
                        src="/images/playbutton.png"
                        alt="Tonton Film"
                    />
                </button> */}
            </Card.Body>
        </Card>
    </div>
  )
}

export default Detail