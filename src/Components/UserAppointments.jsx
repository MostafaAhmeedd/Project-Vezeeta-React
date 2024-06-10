import React from 'react';
import '../Styles/UserAppointmentsStyle.css';
 
const UserAppointments = () => {
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
            "appointment":[{
                "id":"1",
                "date": "Today",
                "from": "99",
                "to":"daa",
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
            "appointment":[{
                "id":"1",
                "date": "Today",
                "from": "99",
                "to":"daa",
                "activated": true
            },]
        },
 
 
    ]
}
 
  const userList = users.users;
  const id = 0;
 
  return (
    <div className="user-appointments-container">
      <div className="appointments-list">
        {userList.map((user) => (
         
          <div key={user.id} className="appointment-card">
            <h2 className="appointment-name">{user.name}'s Appointments:</h2>
            <ul className="appointment-ul">
              {user.appointment.map((appointment) => (
                <li key={appointment.id}>
                  <strong>Date:</strong> {appointment.date}<br />
                  <strong>From:</strong> {appointment.from}<br />
                  <strong>To:</strong> {appointment.to}<br />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default UserAppointments;
 