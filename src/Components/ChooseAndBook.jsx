import React from 'react';
import '../Styles/ChooseAndBookStyle.css';

const SpecialtiesAndCities = () => {
    return (
        <div className="beforeAndAfter">
            <div className="container">
                <div className="specialties-part" style={{ width: '50%' }}>
                    <span className="specialties-header">Choose and book from top specialties</span>
                    <a href="https://www.vezeeta.com/en/doctor/dermatology/egypt" className="specialty">Dermatologist</a>
                    <a href="https://www.vezeeta.com/en/doctor/dentistry/egypt" className="specialty">Dentist</a>
                    <a href="https://www.vezeeta.com/en/doctor/psychiatry/egypt" className="specialty">Psychiatrist</a>
                    <a href="https://www.vezeeta.com/en/doctor/pediatrics-and-new-born/egypt" className="specialty">Pediatrician</a>
                    <a href="https://www.vezeeta.com/en/doctor/neurology/egypt" className="specialty">Neurologist</a>
                    <a href="https://www.vezeeta.com/en/doctor/orthopedics/egypt" className="specialty">Orthopedist</a>
                    <a href="https://www.vezeeta.com/en/doctor/gynaecology-and-infertility/egypt" className="specialty">Gynecologist</a>
                    <a href="https://www.vezeeta.com/en/doctor/ear-nose-and-throat/egypt" className="specialty">ENT Doctor</a>
                    <a href="https://www.vezeeta.com/en/doctor/cardiology/egypt" className="specialty">Cardiologist</a>
                    <a href="/en/specialties" className="specialty">View More ...</a>
                </div>
                <div className="cities-part" style={{ width: '50%' }}>
                    <span className="cities-header">Choose and book from top cities</span>
                    <a href="https://www.vezeeta.com/en/doctor/all-specialities/cairo" className="city">Cairo</a>
                    <a href="https://www.vezeeta.com/en/doctor/all-specialities/giza" className="city">Giza</a>
                    <a href="https://www.vezeeta.com/en/doctor/all-specialities/alexandria" className="city">Alexandria</a>
                    <a href="https://www.vezeeta.com/en/doctor/all-specialities/north-coast" className="city">North Coast</a>
                    <a href="https://www.vezeeta.com/en/doctor/all-specialities/qalyubia" className="city">Qalyubia</a>
                    <a href="https://www.vezeeta.com/en/doctor/all-specialities/gharbia" className="city">Gharbia</a>
                    <a href="https://www.vezeeta.com/en/doctor/all-specialities/menoufia" className="city">Menoufia</a>
                    <a href="https://www.vezeeta.com/en/doctor/all-specialities/fayoum" className="city">Fayoum</a>
                    <a href="https://www.vezeeta.com/en/doctor/all-specialities/el-dakahlia" className="city">El-Dakahlia</a>
                    <a href="/en/areas" className="city">View More ...</a>
                </div>
            </div>
        </div>
    );
};

export default SpecialtiesAndCities;
