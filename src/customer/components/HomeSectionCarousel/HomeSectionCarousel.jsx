import React, { useState, useEffect } from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Button from '@mui/material/Button';

function HomeSectionCarousel({ data, sectionName }) {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const [activeIndex, setActiveIndex] = useState(0);

    const slidePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    const slideNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    const items = data.slice(0, 10).map((item) => <HomeSectionCard key={item.id} product={item} />);

    return (
        <div className="px-4 lg:px-10 border">
            <h2 className='text-2xl font-extrabold text-gray-800'>{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    key={activeIndex} // Add key prop here
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length - 1 && (
                    <Button
                        className="z-50"
                        variant="contained"
                        sx={{ position: 'absolute', top: '8rem', right: '0rem', transform: 'translateX(50%) rotate(90deg)' }}
                        aria-label="next"
                        onClick={slideNext}
                    >
                        <ChevronLeftIcon sx={{ transform: 'rotate(90deg)' }} />
                    </Button>
                )}
                {activeIndex !== 0 && (
                    <Button
                        className="z-50"
                        variant="contained"
                        sx={{ position: 'absolute', top: '8rem', left: '0rem', transform: 'translateX(-50%) rotate(-90deg)' }}
                        aria-label="next"
                        onClick={slidePrev}
                    >
                        <ChevronLeftIcon sx={{ transform: 'rotate(90deg)' }} />
                    </Button>
                )}
            </div>
        </div>
    );
}

export default HomeSectionCarousel;
