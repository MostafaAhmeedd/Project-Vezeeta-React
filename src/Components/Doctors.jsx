import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'swiper/swiper-bundle.css';
import '../Styles/DoctorsStyle.css';
import { AllDoctorsData, EditDoctorsData } from '../Redux/Slices/SearchFilteredDoctors';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd, faMapMarkerAlt, faMoneyBillAlt, faClock, faPhone } from "@fortawesome/free-solid-svg-icons";

const Doctors = () => {
    const dispatch = useDispatch();
    const speciality = useSelector((state) => state.SearchDetails.speciality);
    const city = useSelector((state) => state.SearchDetails.city);
    const doctorName = useSelector((state) => state.SearchDetails.doctorName);
    const Alldocs = useSelector((state) => state.FilteredDoctorsData.AllDoctor);
    const users = {
        "users": [
            {
                "id": "1",
                "name": "Ahmed",
                "email": "Ahmed@gmail.com",
                "phoneNum": "0120556632",
                "gender": "male",
                "password": "1234",
                "bithday": "",
                "appointment": [{
                    "id": "1",
                    "date": "Today",
                    "from": "99",
                    "to": "daa",
                    "activated": true
                },]
            },
            {
                "id": "2",
                "name": "Ahmed",
                "email": "Ahmed@gmail.com",
                "phoneNum": "0120556632",
                "gender": "male",
                "password": "1234",
                "bithday": "",
                "appointment": [{
                    "id": "1",
                    "date": "Today",
                    "from": "99",
                    "to": "daa",
                    "activated": true
                },]
            },


        ]
    }
    const id = "2"
    const book = (userId, doctorId, appointment, Alldocs) => {
        const user = users.users.find(user => user.id === userId);
        if (user) {
            let updatedUser;
            if (user.appointment) {
                updatedUser = {
                    ...user,
                    appointment: [
                        ...user.appointment,
                        {
                            id: appointment.id,
                            date: appointment.date,
                            from: appointment.from,
                            to: appointment.to,
                            activated: !appointment.activated
                        }
                    ]
                };
            }
            else{
                updatedUser = {
                    ...user,
                    appointment: [{
                        id: appointment.id,
                        date: appointment.date,
                        from: appointment.from,
                        to: appointment.to,
                        activated: true
                    }]
                };
            }
            const index = users.users.findIndex(u => u.id === userId);
            users.users[index] = updatedUser;
        }
        
        const doc = Alldocs.find(doc => doc.id === doctorId);
        if (doc) {
            const updatedDoc = {
                ...doc,
                appointment: doc.appointment.map(appt => {
                    if (appt.id === appointment.id) {
                        return {
                            ...appt,
                            activated: false
                        }
                    }
                    return appt;
                }).concat()
            }
            dispatch(EditDoctorsData(updatedDoc))

        }
    }

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
                                <span className="stars">{'★'.repeat(Math.floor(doctor.rating))}</span>
                                <span className="rating-count">Overall Rating From {doctor.ratingCount} Visitors</span>
                            </div>
                            <ul className="details">
                                <li><FontAwesomeIcon icon={faUserMd} /> Orthopedist Specialized in <span>{doctor.specialization}</span></li>
                                <li><FontAwesomeIcon icon={faMapMarkerAlt} /> {doctor.location}</li>
                                <li><FontAwesomeIcon icon={faMoneyBillAlt} /> Fees: {doctor.fees} EGP</li>
                                <li><FontAwesomeIcon icon={faClock} /> {doctor.waitingTime} min</li>
                                <li><FontAwesomeIcon icon={faPhone} /> {doctor.phone} - Cost of regular call</li>
                            </ul>
                        </div>
                        <Swiper
                            slidesPerView={2}
                        >
                            {doctor.appointment.map((appointment, i) => (
                                <SwiperSlide key={i}>
                                    <div className="SchedulesubComponentsstyle__AnimateSlideSideWay-sc-1dc31lc-9 hkOlnY">
                                        <div className="SchedulesubComponentsstyle__DayColumn-sc-1dc31lc-12 TVapW">
                                            <div className="SchedulesubComponentsstyle__ColumnButton-sc-1dc31lc-11 bMwAny">{appointment.date}</div>
                                            <div className="SchedulesubComponentsstyle__DayContent-sc-1dc31lc-10 gswTQR">
                                                <div className="SchedulesubComponentsstyle__CenterText-sc-1dc31lc-16 ehgKRu">
                                                    <span className="SchedulesubComponentsstyle__Small-sc-1dc31lc-20 fpXaYC">From </span>
                                                    <span className="SchedulesubComponentsstyle__Bold-sc-1dc31lc-19 eaiLGN">{appointment.from}</span> <br />
                                                    <span className="SchedulesubComponentsstyle__Small-sc-1dc31lc-20 fpXaYC">To </span>
                                                    <span className="SchedulesubComponentsstyle__Bold-sc-1dc31lc-19 eaiLGN">{appointment.to}</span>
                                                </div>
                                            </div>
                                            {appointment.activated ? (
                                                <div className="SchedulesubComponentsstyle__ColumnButton-sc-1dc31lc-11 dEeEEt" title={`Book your appointment ${appointment.date}`} onClick={() => book(id, doctor.id, appointment, Alldocs)} >Book</div>
                                            ) : (
                                                <div className="SchedulesubComponentsstyle__ColumnButton-sc-1dc31lc-11 dEeEEtD" title={`Appointment not available`} disabled>Reserved</div>
                                            )}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Doctors;
//