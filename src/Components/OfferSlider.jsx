import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../Styles/OfferSliderStyle.css'

const OfferSlider = () => {
    return (
        <div className="Owrapper">
            <h1 className="Oheader"> Choose from top offers </h1>
            <Swiper className="Oswiper"
                modules={[Navigation, Pagination, A11y]}
                slidesPerView={4}
                slidesPerGroup={4}
                spaceBetween={10}
                navigation
                pagination={{ clickable: true }}
                style={{ paddingLeft :"40px"}}

                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}>

                <SwiperSlide className="Oswiper-slider">
                    <div className="Ocard-style">
                        <span className="Opercent">40% OFF</span>
                        <img className="Oimg" src="/OffersImages/teethCleaning.jpeg" alt="teethCleaning"></img>
                        <div className="Ooffer-info">
                            <h2 className="Ooffer-name">Teeth Cleaning</h2>
                            <div className="Oprices">
                                <span className="Ooriginal-price">1200 EGP</span>
                                <span className="Ooffer-price">700 EGP</span>
                            </div>
                            <p className="Ono-offers">78 Offers</p>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide className="Oswiper-slider">
                    <div className="Ocard-style">
                        <span class="Opercent">70% OFF</span>
                        <img className="Oimg" src="/OffersImages/facialCleansing.jpeg"alt="facialCleansing"></img>
                        <div class="Ooffer-info">
                            <h2 class="Ooffer-name">Facial Cleansing</h2>
                            <div className="Oprices">
                                <span class="Ooriginal-price"> 500 EGP</span>
                                <span class="Ooffer-price"> 150 EGP</span>
                            </div>
                            <p class="Ono-offers"> 236 Offers</p>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide className="Oswiper-slider">
                    <div className="Ocard-style">
                        <span class="Opercent">24% OFF</span>
                        <img className="Oimg" src="/OffersImages/visionCorrection.jpeg"alt="visionCorrection"></img>
                        <div className="Ooffer-info">
                            <h2 className="Ooffer-name">Vision Correction</h2>
                            <div className="Oprices">
                                <span className="Ooriginal-price">5000 EGP</span>
                                <span className="Ooffer-price">3800 EGP</span>
                            </div>
                            <p className="Ono-offers">26 Offers</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="Oswiper-slider">
                    <div className="Ocard-style">
                        <span class="Opercent">25% OFF</span>
                        <img className="Oimg" src="./OffersImages/metalBraces.jpeg"alt="metalBraces"></img>
                        <div class="Ooffer-info">
                            <h2 class="Ooffer-name">Metal Braces</h2>
                            <div className="Oprices">
                                <span class="Ooriginal-price">10000 EGP</span>
                                <span class="Ooffer-price">7500 EGP</span>
                            </div>
                            <p class="Ono-offers">42 Offers</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="Oswiper-slider">
                    <div className="Ocard-style">
                        <span class="Opercent">50% OFF</span>
                        <img className="Oimg" src="/OffersImages/facePeeling.jpeg"alt="facePeeling"></img>
                        <div class="Ooffer-info">
                            <h2 class="Ooffer-name">Face Peeling</h2>
                            <div className="Oprices">
                                <span class="Ooriginal-price"> 500 EGP</span>
                                <span class="Ooffer-price"> 250 EGP </span>
                            </div>
                            <p class="Ono-offers"> 80 Offers</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="Oswiper-slider">
                    <div className="Ocard-style">
                        <span className="Opercent">45% OFF</span>
                        <img className="Oimg" src="/OffersImages/weightLoss.jpeg"alt="weightLoss"></img>

                        <div className="Ooffer-info">
                            <h2 className="Ooffer-name">Weight Loss</h2>
                            <div className="Oprices">
                                <span className="Ooriginal-price">600 EGP</span>
                                <span className="Ooffer-price"> 350 EGP</span>
                            </div>
                            <p className="Ono-offers"> 67 Offers</p>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide className="Oswiper-slider">
                    <div className="Ocard-style">
                        <span className="Opercent">55% OFF</span>
                        <img className="Oimg" src="./OffersImages/vitaminD.jpeg"alt="vitaminD"></img>
                        <div className="Ooffer-info">
                            <h2 className="Ooffer-name">Vitamin D</h2>
                            <div className="Oprices">
                                <span className="Ooriginal-price">400 EGP</span>
                                <span className="Ooffer-price">180 EGP</span>
                            </div>
                            <p className="Ono-offers">194 Offers</p>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide className="Oswiper-slider">
                    <div className="Ocard-style">
                        <span className="Opercent">50% OFF</span>
                        <img className="Oimg" src="/OffersImages/laserHairRemoval.jpeg"alt="laserHairRemoval"></img>
                        <div className="Ooffer-info">
                            <h2 className="Ooffer-name">Laser Hair Removal</h2>
                            <div className="Oprices">
                                <span className="Ooriginal-price"> 500 EGP</span>
                                <span className="Ooffer-price"> 250 EGP</span>
                            </div>
                            <p className="Ono-offers"> 122 Offers</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>)
}


export default OfferSlider