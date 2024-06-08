import React, { useEffect, useState } from 'react';
import '../Styles/SearchBoxBackgroundStyle.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const SearchBoxBackground = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const images = [
            './Backgrounds/background1.jpg',
            './Backgrounds/background2.jpg',
            './Backgrounds/background3.jpg',
            './Backgrounds/background4.jpg'
        ];

        const backgroundImage = document.getElementById('backgroundImage');
        const switchBackground = () => {
            backgroundImage.src = images[currentImageIndex];
            backgroundImage.classList.remove('active');
            void backgroundImage.offsetWidth;
            backgroundImage.classList.add('active');
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        };
        const intervalId = setInterval(switchBackground, 2500);

        return () => clearInterval(intervalId);
    }, [currentImageIndex]);

    return (
        <div className="backgrounds">
            <img id="backgroundImage" className="active" alt="background" />
            <div className="PhotoCarouselstyle__Hightlight-sc-gek9bd-2 imEmYa"></div>
            <div className="home-text">
                <h1>Better Healthcare for a Better Life</h1>
                <h2 className="home-book">Book online or call
                    <div className="home-phone">
                        <FontAwesomeIcon icon={faPhone} />
                        <a href="tel:16676">16676</a>
                    </div>
                </h2>
            </div>
        </div>
    );
}

export default SearchBoxBackground;
