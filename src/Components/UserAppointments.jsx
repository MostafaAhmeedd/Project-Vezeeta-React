import React from 'react';
import '../Styles/UserAppointmentsStyle.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../Redux/Slices/User';
import {  EditDoctorsData } from '../Redux/Slices/SearchFilteredDoctors';


const UserAppointments = () => {
  const user = useSelector((state) => state.user.user);
  const Alldocs = useSelector((state) => state.FilteredDoctorsData.AllDoctor);
  const dispatch = useDispatch();

  const handleDeleteAppointment = (appointmentId,docId) => {
    const updatedAppointments = user.appointment.filter(
      (appointment) => appointment.id !== appointmentId
    );
    
    const updatedUser = { ...user, appointment: updatedAppointments };
    let updatedDoc
    const doc = Alldocs.find(doc => doc.id ===docId);
    if (doc) {
      updatedDoc = {
          ...doc,
          appointment: doc.appointment.map(appt => {
              if (appt.id === appointmentId) {
                  return {
                      ...appt,
                      activated: false
                  }
              }
              return appt;
          }).concat()
      }

  }
  dispatch(EditDoctorsData(updatedDoc));
  dispatch(updateUser(updatedUser));


  };

  return (
    <div className="user-appointments-container">
      <div className="appointments-list">
        {!user || !user.appointment || user.appointment.length === 0 ? (
          <p className="no-appointments">No appointments available</p>
        ) : (
          <div key={user.id} className="appointment-card">
            <h2 className="appointment-name">{user.name}'s Appointments:</h2>
            <ul className="appointment-ul">
              {user.appointment.map((appointment) => (
                <li key={appointment.id} className="appointment-item">
                  <div className="appointment-details">
                    <strong>Doctor:</strong> {appointment.doctor_name}<br />
                    <strong>Date:</strong> {appointment.date}<br />
                    <strong>From:</strong> {appointment.from}<br />
                    <strong>To:</strong> {appointment.to}
                  </div>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteAppointment(appointment.id,appointment.doctor_id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAppointments;
