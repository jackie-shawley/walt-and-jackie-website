import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

export default function HomeCarousel() {
    return(
        <Carousel fade>
            <Carousel.Item>
                <img
                    className='carousel-img'
                    src='images/carousel photos/Walt-and-Jackie-standing-back-to-back.png'
                    alt='Walt &amp Jackie back to back with guitars'
                />
                <Carousel.Caption>
                    <h3>Walt &amp Jackie</h3>
                    <p>Photo taken by Scott Miller Photography at Cambria Iron Company, Blacksmith Shop</p>  
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='carousel-img'
                    src='images/carousel photos/PPAC-xmas-show-silent-night-2016.jpeg'
                    alt='Walt, Jackie, Denise and Sam on stage at PPAC'
                />
                <Carousel.Caption>
                    <h3>A Walt &amp Jackie Christmas</h3>
                    <p>Walt &amp Jackie are joined by Denise Baldwin and Sam Coco in an a capella rendition of 'Silent Night'</p>  
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}