import React, { useState } from 'react';
import { holdDocName, holdCity, holdSpecialty } from '../Redux/Slices/SearchDetails';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import '../Styles/SearchBoxStyle.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const SearchBox = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSearch, setIsSearch] = useState(true);
    const [specialty, setSpecialty] = useState('');
    const [city, setCity] = useState('');
    const [doctorName, setDoctorName] = useState('');
    const [telehealthSpecialty, setTelehealthSpecialty] = useState('');

    const switchSearch = (x) => {
        setIsSearch(x);
    }

    const handleSearch = () => {
        if (isSearch) {

            dispatch(holdCity(city))
            dispatch(holdDocName(doctorName))
            dispatch(holdSpecialty(specialty))
            navigate('/filtered_doctors');
        } else {
            console.log('Search Type: Telehealth');
            console.log('Specialty:', telehealthSpecialty);
        }
    }

    return (
        <div className="container my-4 p-4 bg-white rounded shadow search-container">
            <div className="row border-bottom pb-3 search-header">
                <div
                    className={`col-md-6 text-center border-end search-header-item ${isSearch ? 'clicked' : ''}`}
                    onClick={() => switchSearch(true)}
                    role="button"
                >
                    <div className="d-flex align-items-center justify-content-center">
                        <i className="fas fa-calendar-alt fa-5x me-2"></i>
                        <div>
                            <span className="h5 d-block">Book a doctor</span>
                            <span className="h9 d-block" style={{ fontSize: '0.8rem', marginLeft: '5px' }}>Examination or procedure</span>
                        </div>
                    </div>
                </div>
                <div
                    className={`col-md-6 text-center search-header-item ${!isSearch ? 'clicked' : ''}`}
                    onClick={() => switchSearch(false)}
                    role="button"
                >
                    <div className="d-flex align-items-center justify-content-center">
                        <i className="fas fa-stethoscope fa-2x me-2"></i>
                        <div>
                            <span className="h5 d-block">Telehealth</span>
                            <small className="h9 d-block" style={{ fontSize: '0.8rem', marginLeft: '5px' }}>Call consultation with doctor</small>
                        </div>
                    </div>
                </div>
            </div>

            {isSearch ? (
                <div className="row mt-3 Allbar">
                    <div className="col-3 mb-3">
                        <select className="form-select" value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
                            <option value="" selected>Choose specialty</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Dermatology">Dermatology</option>
                            <option value="Endocrinology">Endocrinology</option>
                            <option value="Gastroenterology">Gastroenterology</option>
                            <option value="Neurology">Neurology</option>
                            <option value="Oncology">Oncology</option>
                            <option value="Pediatrics">Pediatrics</option>
                            <option value="Psychiatry">Psychiatry</option>
                            <option value="Urology">Urology</option>
                        </select>
                    </div>
                    <div className="col-3 mb-3">
                        <select className="form-select" value={city} onChange={(e) => setCity(e.target.value)}>
                            <option value="" selected>Choose city</option>
                            <option value="Cairo">Cairo</option>
                            <option value="Alexandria">Alexandria</option>
                            <option value="Giza">Giza</option>
                            <option value="Shubra El Kheima">Shubra El Kheima</option>
                            <option value="Port Said">Port Said</option>
                            <option value="Suez">Suez</option>
                            <option value="Luxor">Luxor</option>
                            <option value="Mansoura">Mansoura</option>
                            <option value="Asyut">Asyut</option>
                        </select>
                    </div>

                    <div className="col-3 mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Doctor name or hospital"
                            value={doctorName}
                            onChange={(e) => setDoctorName(e.target.value)}
                        />
                    </div>
                    <div className="col-3 text-end">
                        <button className="btn btn-danger search-btn1" onClick={handleSearch}>Search</button>
                    </div>
                </div>
            ) : (
                <div className="row mt-3 Allbar">
                    <div className="col-6 mb-3">
                        <select className="form-select" value={telehealthSpecialty} onChange={(e) => setTelehealthSpecialty(e.target.value)}>
                            <option selected>Choose specialty</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Dermatology">Dermatology</option>
                            <option value="Endocrinology">Endocrinology</option>
                            <option value="Gastroenterology">Gastroenterology</option>
                            <option value="Neurology">Neurology</option>
                            <option value="Oncology">Oncology</option>
                            <option value="Pediatrics">Pediatrics</option>
                            <option value="Psychiatry">Psychiatry</option>
                            <option value="Urology">Urology</option>
                        </select>
                    </div>
                    <div className="col-6 text-end">
                        <button className="btn btn-danger search-button" onClick={handleSearch}>Search</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchBox;
