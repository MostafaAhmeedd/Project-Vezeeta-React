import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddDoctor from './AddDoctor';
import DeleteDoctor from './DeleteDoctor';
import { setDoctors } from '../Redux/DeleteDoctorSlice';

import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';

Chart.register(CategoryScale);

const Admin = () => {
  const dispatch = useDispatch();
  const doctors = useSelector(state => state.deleteDoctor.doctors);
  const error = useSelector(state => state.deleteDoctor.error);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [todayAppointments, setTodayAppointments] = useState([]);
  const [totalAppointments, setTotalAppointments] = useState(0);
  useEffect(() => {
    const fetchDoctors = async () => {
      const response = await fetch('http://localhost:4000/doctors');
      const data = await response.json();
      dispatch(setDoctors(data));
    };

    fetchDoctors();
  }, [dispatch]);

  useEffect(() => {
    const appointments = doctors.reduce((total, doctor) => {
      const todayAppointments = doctor.appointment.filter(app => app.date === 'Today');
      return total.concat(todayAppointments.map(app => ({ doctor: doctor.name, time: app.from })));
    }, []);
    setTodayAppointments(appointments);
    setTotalAppointments(appointments.length);
  }, [doctors]);

  useEffect(() => {
    const timeLabels = Array.from(new Set(todayAppointments.map(app => app.time)));
    const appointmentsByTime = timeLabels.map(time => todayAppointments.filter(app => app.time === time).length);

    const ctx = document.getElementById('lineChart').getContext('2d');
    const lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [{
          label: 'Appointments',
          data: appointmentsByTime,
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      lineChart.destroy();
    };
  }, [todayAppointments]);

  return (
    <div style={{ overflow: 'auto', height: '93vh', width: '100%' , backgroundColor: 'white' }}>
      <div className="container my-4" >
        <h1 className="text-center mb-4">Admin Page</h1>

        <div className="d-flex justify-content-center mb-4">
          <div className="offset-md-8 col-md-4">
            <button onClick={() => { setShowAddForm(true); setShowDeleteForm(false); }} className="btn btn-primary me-2">
              Add Doctor
            </button>
            <button onClick={() => { setShowAddForm(false); setShowDeleteForm(true); }} className="btn btn-danger">
              Delete Doctor
            </button>
          </div>
        </div>

        <div className="d-flex justify-content-between" >
          <div className="card mb-4" style={{ width: '50%' }}>
            <div className="card-body">
              <p className="card-text">Number of Doctors: {doctors.length}</p>
              <div className="appointments-timeline">
                <canvas id="lineChart" width="400" height="400"></canvas>
              </div>
              <p className="card-text mt-5" >Total Appointments for Today: {totalAppointments}</p>
            </div>
          </div>

          <div className="col-md-6" style={{ width: '48%' }}>
            {showAddForm && <AddDoctor />}
            {showDeleteForm && <DeleteDoctor doctors={doctors} />}
          </div>
        </div>

        {error && <div className="alert alert-danger mt-4">Error: {error}</div>}
      </div>
    </div>

  );
};

export default Admin;