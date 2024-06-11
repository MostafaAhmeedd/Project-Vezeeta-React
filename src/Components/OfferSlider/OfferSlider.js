import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, A11y } from "swiper/modules";
import './OfferSlider.css'
const OfferSlider=()=>{


    return (
        <div className="wrapper2">
             <h1> Choose from top offers</h1>
        <Swiper className="swiper2" 
        modules={[Navigation, Pagination,A11y]}
        spaceBetween={50}
        slidesPerView={4}
        slidesPerGroup={4}
        navigation
        pagination={{ clickable: true }}
        
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>

        <SwiperSlide className="swiper-slider2">
            <div className="card-style2">
            <span class="percent">40% OFF</span>
                <img className="img2" src="../../../images/offers/teethCleaning.jpeg"></img>
                <div class="offer-info">
                    <h2 class="offer-name">Teeth Cleaning</h2>
                    <span class="original-price">1200 EGP</span>
                    <span class="offer-price">700 EGP</span>
                    <p class="no-offers">78 Offers</p>
            </div>
            </div>
        </SwiperSlide>


        <SwiperSlide className="swiper-slider">
            <div className="card-style2">
            <span class="percent">70% OFF</span>
                <img className="img2" src="../../../images/offers/facialCleansing.jpeg"></img>
                <div class="offer-info">
                    <h2 class="offer-name">Facial Cleansing</h2>
                    <span class="original-price"> 500 EGP</span>
                    <span class="offer-price"> 150 EGP</span>
                    <p class="no-offers"> 236 Offers</p>
            </div>
            </div>
        </SwiperSlide>


        <SwiperSlide className="swiper-slider">
        <div className="card-style2">
        <span class="percent">24% OFF</span>
                <img className="img2" src="../../../images/offers/visionCorrection.jpeg"></img>
                <div className="offer-info">
                    <h2 className="offer-name">Vision Correction</h2>
                    <span className="original-price">5000 EGP</span>
                    <span className="offer-price">3800 EGP</span>
                    <p className="no-offers">26 Offers</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slider">
            <div className="card-style2">
            <span class="percent">25% OFF</span>
                <img className="img2" src="../../../images/offers/metalBraces.jpeg"></img>
                <div class="offer-info">
                    <h2 class="offer-name">Metal Braces</h2>
                    <span class="original-price">10000 EGP</span>
                    <span class="offer-price">7500 EGP</span>
                    <p class="no-offers">42 Offers</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slider">
            <div className="card-style2">
            <span class="percent">50% OFF</span>
                <img className="img2" src="../../../images/offers/facePeeling.jpeg"></img>
                <div class="offer-info">
                    <h2 class="offer-name">Face Peeling</h2>
                    <span class="original-price"> 500 EGP</span>
                    <span class="offer-price"> 250 EGP </span>
                    <p class="no-offers"> 80 Offers</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slider">
            <div className="card-style2">
            <span className="percent">45% OFF</span>
                <img className="img2" src="../../../images/offers/weightLoss.jpeg"></img>

                <div className="offer-info">
                    <h2 className="offer-name">Weight Loss</h2>
                    <span className="original-price">600 EGP</span>
                    <span className="offer-price"> 350 EGP</span>
                    <p className="no-offers"> 67 Offers</p>
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide className="swiper-slider">
            <div className="card-style2">
                <span className="percent">55% OFF</span>
                <img className="img2" src="../../../images/offers/vitaminD.jpeg"></img>
                <div className="offer-info">
                    <h2 className="offer-name">Vitamin D</h2>
                    <span className="original-price">400 EGP</span>
                    <span className="offer-price">180 EGP</span>
                    <p className="no-offers">194 Offers</p>
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide className="swiper-slider">
            <div className="card-style2">
            <span className="percent">50% OFF</span>
                <img className="img2" src="../../../images/offers/laserHairRemoval.jpeg"></img>
                <div className="offer-info">
                    <h2 className="offer-name">Laser Hair Removal</h2>
                    <span className="original-price"> 500 EGP</span>
                    <span className="offer-price"> 250 EGP</span>
                    <p className="no-offers"> 122 Offers</p>
                </div>
            </div>
        </SwiperSlide>

    </Swiper>   
    </div>)
}


export default OfferSlider