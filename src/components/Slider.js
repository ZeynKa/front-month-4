import React, { useState } from 'react';
import '../Styles/Slider.css';

const Slider = () => {
    const photos = [
        '/photo_1.jpg',
        '/photo_2.jpg',
        '/photo_3.jpg',

    ];

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const handleNext = () => {
        setCurrentPhotoIndex((prevIndex) =>
            prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentPhotoIndex((prevIndex) =>
            prevIndex === 0 ? photos.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="slider-container">
            <img src={photos[currentPhotoIndex]} alt={`Photo ${currentPhotoIndex + 1}`} />
            <div className="slider-controls">
                <button onClick={handlePrev}>Назад</button>
                <button onClick={handleNext}>Далее</button>
            </div>
        </div>
    );
};

export default Slider;
