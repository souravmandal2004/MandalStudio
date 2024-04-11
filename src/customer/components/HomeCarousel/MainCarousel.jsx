import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };


const MainCarousel = () => {


    const items = MainCarouselData.map ((item) => <img className="cursor-pointer" role='presentation' src={item.image} />)

    return (
        <div>
            <AliceCarousel
                // mouseTracking
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={1000}
                infinite
                // responsive={responsive}
                // controlsStrategy="alternate"
            />
        </div>
    )
}

export default MainCarousel;
