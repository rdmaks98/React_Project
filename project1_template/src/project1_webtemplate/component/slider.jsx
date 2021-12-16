import React from 'react'
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <>
            <div>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://picsum.photos/800/349"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>first slides</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://picsum.photos/800/319"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>Second slides</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://picsum.photos/800/369"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5>Third slides</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default Slider
