import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addDoctorAsync } from '../Redux/AddDoctorSlice';
import { fetchDoctors } from '../Redux/DeleteDoctorSlice';

const AddDoctor = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const [rating, setRating] = useState('');
  const [ratingCount, setRatingCount] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [city, setCity] = useState('');
  const [location, setLocation] = useState('');
  const [fees, setFees] = useState('');
  const [waitingTime, setWaitingTime] = useState('');
  const [phone, setPhone] = useState('');
  const [numberOfAppointments, setNumberOfAppointments] = useState(2);
  const [appointment, setAppointments] = useState([]);

  useEffect(() => {
    setAppointments(Array.from({ length: numberOfAppointments }, (_, i) => ({ id: `${i + 1}`, date: 'Today', from: '', to: '', activated: false })));
  }, [numberOfAppointments]);

  const handleAppointmentChange = (index, key, value) => {
    const newAppointments = [...appointment];
    newAppointments[index][key] = value;
    setAppointments(newAppointments);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addDoctorAsync({
        name,
        title,
        email,
        photo,
        rating: parseFloat(rating),
        ratingCount: parseInt(ratingCount, 10),
        specialization,
        city,
        location,
        fees: parseFloat(fees),
        waitingTime: parseInt(waitingTime, 10),
        phone,
        appointment
      }));
      await dispatch(fetchDoctors());
      setName('');
      setTitle('');
      setEmail('');
      setPhoto('');
      setRating('');
      setRatingCount('');
      setSpecialization('');
      setCity('');
      setLocation('');
      setFees('');
      setWaitingTime('');
      setPhone('');
      setAppointments(Array.from({ length: numberOfAppointments }, (_, i) => ({ id: `${i + 1}`, date: 'Today', from: '', to: '', activated: false })));
    } catch (error) {
      console.error('Error occurred while adding doctor:', error);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3 align-items-center">
            <label htmlFor="name" className="col-sm-3 col-form-label">Name</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
          </div>
          <div className="row mb-3 align-items-center">
            <label htmlFor="title" className="col-sm-3 col-form-label">Title</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
          </div>
          <div className="row mb-3 align-items-center">
            <label htmlFor="email" className="col-sm-3 col-form-label">Email</label>
            <div className="col-sm-9">
              <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>
          <div className="row mb-3 align-items-center">
            <label htmlFor="photo" className="col-sm-3 col-form-label">Photo URL</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} />
            </div>
          </div>
          <div className="row mb-3 align-items-center">
            <label htmlFor="rating" className="col-sm-3 col-form-label">Rating</label>
            <div className="col-sm-9">
              <input type="number" step="0.1" className="form-control" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} required />
            </div>
          </div>
          <div className="row mb-3 align-items-center">
            <label htmlFor="ratingCount" className="col-sm-3 col-form-label">Rating Count</label>
            <div className="col-sm-9">
              <input type="number" className="form-control" id="ratingCount" value={ratingCount} onChange={(e) => setRatingCount(e.target.value)} required />
            </div>
          </div>
          <div className="row mb-3 align-items-center">
            <label htmlFor="specialization" className="col-sm-3 col-form-label">Specialization</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)} required />
            </div>
          </div>
          <div className="row mb-3 align-items-center">
            <label htmlFor="city" className="col-sm-3 col-form-label">City</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
            </div>
          </div>
          <div className="row mb-3 align-items-center">
            <label htmlFor="location" className="col-sm-3 col-form-label">Location</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
            </div>
          </div>
          <div className="row mb-3 align-items-center">
            <label htmlFor="fees" className="col-sm-3 col-form-label">Fees</label>
            <div className="col-sm-9">
              <input type="number" className="form-control" id="fees" value={fees} onChange={(e) => setFees(e.target.value)} required />
            </div>
          </div>
          <div className="row mb-3 align-items-center">
            <label htmlFor="waitingTime" className="col-sm-3 col-form-label">Waiting Time (minutes)</label>
            <div className="col-sm-9">
              <input type="number" className="form-control" id="waitingTime" value={waitingTime} onChange={(e) => setWaitingTime(e.target.value)} required />
            </div>
          </div>
          <div className="row mb-3 align-items-center">
            <label htmlFor="phone" className="col-sm-3 col-form-label">Phone</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
          </div>
          <div className="row mb-3 align-items-center">
            <label htmlFor="numberOfAppointments" className="col-sm-5 col-form-label">Number of Appointments</label>
            <div className="col-sm-3">
              <input
                type="number"
                className="form-control"
                id="numberOfAppointments"
                value={numberOfAppointments}
                onChange={(e) => {
                  setNumberOfAppointments(e.target.value);
                  setAppointments(Array.from({ length: e.target.value }, (_, i) => ({ id: i + 1, date: 'Today', from: '9:00 AM', to: '1:00 PM', activated: false })));
                }}
                required
              />
            </div>
          </div>
          <div className="row mb-3 align-items-center">
            <label className="col-sm-3 col-form-label">Appointments</label>
            <div className="col-sm-9">
              {appointment.map((appointment, index) => (
                <div key={appointment.id} className="row mb-2">
                  <div className="col-sm-3">
                    <input
                      type="text"
                      className="form-control"
                      value={appointment.date}
                      onChange={(e) => handleAppointmentChange(index, 'date', e.target.value)}
                      placeholder="Date"
                      required
                    />
                  </div>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      value={appointment.from}
                      onChange={(e) => handleAppointmentChange(index, 'from', e.target.value)}
                      placeholder="From"
                      required
                    />
                  </div>
                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      value={appointment.to}
                      onChange={(e) => handleAppointmentChange(index, 'to', e.target.value)}
                      placeholder="To"
                      required
                    />
                  </div>
                  <div className="col-sm-5 d-flex align-items-center">
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      checked={appointment.activated}
                      onChange={(e) => handleAppointmentChange(index, 'activated', e.target.checked)}
                    /> <label className="form-check-label">Activate</label>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="row mb-3">
            <div className="col-sm-12 text-center"> {/* Center the button */}
              <button type="submit" className="btn btn-primary">Add Doctor</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;