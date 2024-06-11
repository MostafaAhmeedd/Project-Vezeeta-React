import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, A11y } from "swiper/modules";
import './SpecialitySlider.css'
const SpecialitySlider=()=>{


    return (
        <div className="wrapper">
            <h1> Book from top specialties</h1>
        <Swiper className="swiper" 
        modules={[Navigation, Pagination,A11y]}
        spaceBetween={50}
        slidesPerView={4}
        slidesPerGroup={4}
        navigation
        pagination={{ clickable: true }}
        
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
             
        <SwiperSlide className="swiper-slider">
            <div className="card-style">
                <img className="img1" src="../../../images/specialities/skin.jpeg"  ></img>
                <h2 className="speciality-name">Skin</h2>
            </div>
        </SwiperSlide>


        <SwiperSlide className="swiper-slider">
            <div className="card-style">
                <img className="img1" src="../../../images/specialities/teeth.jpeg" ></img>
                <h2 className="speciality-name">Teeth</h2>
            </div>
        </SwiperSlide>


        <SwiperSlide className="swiper-slider">
            <div className="card-style">
                <img className="img1" src="../../../images/specialities/MentalEmotionalBehavioural.jpeg"></img>
                <h2 className="speciality-name">Mental, Emotional or Behavioral Disorders</h2>
            </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slider">
            <div className="card-style">
                <img className="img1" src="../../../images/specialities/child.jpeg"></img>
                <h2 className="speciality-name">Child</h2>
            </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slider">
            <div className="card-style">
                <img className="img1" src="../../../images/specialities/brainNerves.jpeg"></img>
                <h2 className="speciality-name">Brain & Nerves</h2>
            </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slider">
            <div className="card-style">
            <img className="img1" src="../../../images/specialities/bones.jpeg"></img>
                <h2 className="speciality-name">Bones</h2>
            </div>
        </SwiperSlide>


        <SwiperSlide className="swiper-slider">
            <div className="card-style">
                <img className="img1" src="../../../images/specialities/gynaecologyInfertility.jpeg" ></img>
                <h2 className="speciality-name">Gynaecology and Infertility</h2>
            </div>
        </SwiperSlide>


        <SwiperSlide className="swiper-slider">
            <div className="card-style">
                <img className="img1" src="../../../images/specialities/earNoseThroat.jpeg"></img>
                <h2 className="speciality-name" > Ear, Nose and Throat</h2>
            </div>
        </SwiperSlide>

    </Swiper>   
    </div>)
}


export default SpecialitySlider