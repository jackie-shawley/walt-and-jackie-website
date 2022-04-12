import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

function VideoCarousel() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return ( 
        <div className='carousel'>
            <Carousel responsive={responsive}>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/77OQpKaKPTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                </div>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xxGUF2VlS6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                </div>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dIdRV7hRCfI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                </div>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/sgbU2xKIZyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                </div>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/sNZIrei0zmY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                </div>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8z9MPZmZf94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                </div>
            </Carousel>
            {/* <Carousel fade>
                <Carousel.Item>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/77OQpKaKPTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    
                </Carousel.Item>
                <Carousel.Item>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xxGUF2VlS6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Carousel.Item>
                <Carousel.Item>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dIdRV7hRCfI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Carousel.Item>
                <Carousel.Item>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/sgbU2xKIZyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Carousel.Item>
                <Carousel.Item>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/sNZIrei0zmY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Carousel.Item>
                <Carousel.Item>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8z9MPZmZf94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Carousel.Item>
            </Carousel> */}
        </div>
     );
}

export default VideoCarousel;