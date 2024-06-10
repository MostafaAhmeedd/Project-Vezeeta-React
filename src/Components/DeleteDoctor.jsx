import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteDoctorAsync } from '../Redux/DeleteDoctorSlice';

const DeleteDoctor = ({ doctors }) => {
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteDoctorAsync(id)).unwrap();
      console.log(`Doctor with ID: ${id} deleted successfully`);
    } catch (err) {
      console.error('Failed to delete the doctor: ', err);
    }
  };

  return (
    <div>
      <ul className="list-group">
        {doctors.map(doctor => (
          <li key={doctor.id} className="list-group-item d-flex justify-content-between align-items-center">
            {doctor.name}
            <button className="btn btn-danger" onClick={() => handleDelete(doctor.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteDoctor;
