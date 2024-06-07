import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../Styles/DoctorsStyle.css';
import { useState, useContext } from 'react';
import { AllDoctorsData } from '../Redux/Slices/SearchFilteredDoctors';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd, faMapMarkerAlt, faMoneyBillAlt, faClock, faPhone } from "@fortawesome/free-solid-svg-icons";



const Doctors = () => {
    const dispatch = useDispatch();
    const speciality = useSelector((state) => state.SearchDetails.speciality);
    const city = useSelector((state) => state.SearchDetails.city);
    const doctorName = useSelector((state) => state.SearchDetails.doctorName);
    const Alldocs = useSelector((state) => state.FilteredDoctorsData.AllDoctor);


    useEffect(() => {
        dispatch(AllDoctorsData());
    }, [dispatch]);


    const filterDoctors = (docs, speciality, city, doctorName) => {
        return docs.filter((doctor) => {
            const isSpecialtyMatch = speciality ? doctor.speciality === speciality : true;
            const isCityMatch = city ? doctor.city === city : true;
            const isNameMatch = doctorName ? doctor.name.toLowerCase().includes(doctorName.toLowerCase()) : true;
            return isSpecialtyMatch && isCityMatch && isNameMatch;
        });
    };
    const filteredDoctors = filterDoctors(Alldocs, speciality, city, doctorName);
    console.log(filteredDoctors);


    return (
        <div className='con'>
            {filteredDoctors.map((doctor, index) => (
                <div className="doctor-container" key={index}>
                    <div className="doctor-profile">
                        <div className="profile-picture">
                            <img src={doctor.photo} alt={doctor.name} />
                        </div>
                        <div className="profile-details">
                            <h4 className="doctor-cont">
                                <span className="doctor-title">Doctor </span>
                                <span className="doctor-name">{doctor.name}</span>
                            </h4>
                            <p className="title">{doctor.title}</p>
                            <div className="rating">
                                <span className="stars">{'★'.repeat(doctor.rating)}</span>
                                <span className="rating-count">Overall Rating From {doctor.ratingCount} Visitors</span>
                            </div>
                            <ul className="details">
                                <li><FontAwesomeIcon icon={faUserMd} /> Orthopedist Specialized in <span>{doctor.specialization}</span></li>
                                <li><FontAwesomeIcon icon={faMapMarkerAlt} /> {doctor.location}</li>
                                <li><FontAwesomeIcon icon={faMoneyBillAlt} /> Fees: {doctor.fees} EGP</li>
                                <li><FontAwesomeIcon icon={faClock} /> {doctor.waitingTime}</li>
                                <li><FontAwesomeIcon icon={faPhone} /> {doctor.phone} - Cost of regular call</li>
                            </ul>
                        </div>
                        <Swiper
                            navigation={true}
                            slidesPerView={1}
                        >
                            <div>
                                <span className="SchedulesubComponentsstyle__AnimateSlideSideWay-sc-1dc31lc-9 hkOlnY">
                                    <div className="SchedulesubComponentsstyle__DayColumn-sc-1dc31lc-12 TVapW">
                                        <div className="SchedulesubComponentsstyle__ColumnButton-sc-1dc31lc-11 bMwAny">Today</div>
                                        <div className="SchedulesubComponentsstyle__DayContent-sc-1dc31lc-10 gswTQR">
                                            <div className="SchedulesubComponentsstyle__CenterText-sc-1dc31lc-16 ehgKRu">
                                                <span className="SchedulesubComponentsstyle__Small-sc-1dc31lc-20 fpXaYC">From </span>
                                                <span className="SchedulesubComponentsstyle__Bold-sc-1dc31lc-19 eaiLGN">9:00 PM</span> <br />
                                                <span className="SchedulesubComponentsstyle__Small-sc-1dc31lc-20 fpXaYC">To </span>
                                                <span className="SchedulesubComponentsstyle__Bold-sc-1dc31lc-19 eaiLGN">11:00 PM</span>
                                            </div>
                                        </div>
                                        <div className="SchedulesubComponentsstyle__ColumnButton-sc-1dc31lc-11 dEeEEt" title="Book your appointment Today">Book</div>
                                    </div>
                                </span>
                            </div>
                        </Swiper>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Doctors;



