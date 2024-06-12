import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../Styles/SpecialitySliderStyle.css'

const SpecialitySlider = () => {

    return (
        <div className="Swrapper">
            <h1 className="Sheader"> Book from top specialties</h1>
            <Swiper className="Sswiper"
                navigation={true}
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={10}
                slidesPerView={4}
                slidesPerGroup={4}
                pagination={{ clickable: true }}
                style={{ paddingLeft :"40px"}}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                >

                <SwiperSlide className="Sswiper-slider">
                    <div className="Scard-style">
                        <img className="Simg" src="/SpecialitiesImages/skin.jpeg" alt="skin" ></img>
                        <h2 className="Sspeciality-name">Skin</h2>
                    </div>
                </SwiperSlide>


                <SwiperSlide className="Sswiper-slider">
                    <div className="Scard-style">
                        <img className="Simg" src="/SpecialitiesImages/teeth.jpeg" alt="teeth"></img>
                        <h2 className="Sspeciality-name">Teeth</h2>
                    </div>
                </SwiperSlide>


                <SwiperSlide className="Sswiper-slider">
                    <div className="Scard-style">
                        <img className="Simg" src="/SpecialitiesImages/MentalEmotionalBehavioural.jpeg" alt="MentalEmotionalBehavioural" ></img>
                        <h2 className="Sspeciality-name">Mental, Emotional or Behavioral Disorders</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="Sswiper-slider">
                    <div className="Scard-style">
                        <img className="Simg" src="/SpecialitiesImages/child.jpeg" alt="child"></img>
                        <h2 className="Sspeciality-name">Child</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="Sswiper-slider">
                    <div className="Scard-style">
                        <img className="Simg" src="/SpecialitiesImages/brainNerves.jpeg" alt="brainNerves" ></img>
                        <h2 className="Sspeciality-name">Brain & Nerves</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="Sswiper-slider">
                    <div className="Scard-style">
                        <img className="Simg" src="/SpecialitiesImages/bones.jpeg" alt="bones" ></img>
                        <h2 className="Sspeciality-name">Bones</h2>
                    </div>
                </SwiperSlide>


                <SwiperSlide className="Sswiper-slider">
                    <div className="Scard-style">
                        <img className="Simg" src="/SpecialitiesImages/gynaecologyInfertility.jpeg" alt="gynaecologyInfertility"></img>
                        <h2 className="Sspeciality-name">Gynaecology and Infertility</h2>
                    </div>
                </SwiperSlide>


                <SwiperSlide className="Sswiper-slider">
                    <div className="Scard-style">
                        <img className="Simg" src="/SpecialitiesImages/earNoseThroat.jpeg" alt="earNoseThroat"></img>
                        <h2 className="Sspeciality-name" > Ear, Nose and Throat</h2>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default SpecialitySlider