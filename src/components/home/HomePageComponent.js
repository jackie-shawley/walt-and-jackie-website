import React from 'react';
import HomeCarousel from './HomeCarouselComponent';
import VideoCarousel from './VideoCarouselComponent';


function HomePage() {
return(
    <div className='App'>
        <HomeCarousel />
        <VideoCarousel />
    </div>
    );
}

export default HomePage;