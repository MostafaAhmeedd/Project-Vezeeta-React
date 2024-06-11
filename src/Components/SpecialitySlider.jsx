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
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={10}
                slidesPerView={4}
                slidesPerGroup={4}
                navigation
                pagination={{ clickable: true }}

                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}>

                <SwiperSlide className="Sswiper-slider">
                    <div className="Scard-style">
                        <img className="Simg" src="/SpecialitiesImages/skin.jpeg"  ></img>
                        <h2 className="Sspeciality-name">Skin</h2>
                    </div>
                </SwiperSlide>


                <SwiperSlide className="Sswiper-slider">
                    <div className="Scard-style">
                        <img className="Simg" src="/SpecialitiesImages/teeth.jpeg" ></img>
                        <h2 className="Sspeciality-name">Teeth</h2>
                    </div>
                </SwiperSlide>


                <SwiperSlide className="Sswiper-slider">
                    <div className="Scard-style">
                        <img className="Simg" src="/SpecialitiesImages/MentalEmotionalBehavioural.jpeg"></img>
                        <h2 className="Sspeciality-name">Mental, Emotional or Behavioral Disorders</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="Sswiper-slider">
                    <div className="Scard-style">
                        <img className="Simg" src="/SpecialitiesImages/child.jpeg"></img>
                        <h2 className="Sspeciality-name">Child</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="Sswiper-slider">
                    <div className="Scard-style">
                        <img className="Simg" src="/SpecialitiesImages/brainNerves.jpeg"></img>
                        <h2 className="Sspeciality-name">Brain & Nerves</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="Sswiper-slider">
                    <div className="Scard-style">
                        <img className="Simg" src="/SpecialitiesImages/bones.jpeg"></img>
                        <h2 className="Sspeciality-name">Bones</h2>
                    </div>
                </SwiperSlide>


                <SwiperSlide className="Sswiper-slider">
                    <div className="Scard-style">
                        <img className="Simg" src="/SpecialitiesImages/gynaecologyInfertility.jpeg" ></img>
                        <h2 className="Sspeciality-name">Gynaecology and Infertility</h2>
                    </div>
                </SwiperSlide>


                <SwiperSlide className="Sswiper-slider">
                    <div className="Scard-style">
                        <img className="Simg" src="/SpecialitiesImages/earNoseThroat.jpeg"></img>
                        <h2 className="Sspeciality-name" > Ear, Nose and Throat</h2>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default SpecialitySlider