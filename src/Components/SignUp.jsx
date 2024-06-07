// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addUser } from '../Redux/Slice/userSlice';
// import { useNavigate } from 'react-router-dom';
// // import '../Styles/StyleSignUp.css';
// const SignUp = () => {
//   const [user, setUser] = useState({
//     username: '',
//     phoneNum: '',
//     email: '',
//     password: '',
//     gender: 'Male',
//     birthday: '',
//   });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addUser(user));
//     navigate('/');
//   };

//   return (
//     // <div style={{ backgroundColor: 'lightgrey', paddingBottom: '20px', paddingTop: '10px' }}>
//       <div className="container">
//         <div className="card bg-primary text-white">
//           <div className="card-body text-center" style={{ backgroundColor: 'rgb(0, 112, 205)' }}>
//             <h2>Sign Up</h2>
//           </div>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               name="username"
//               className="form-control"
//               value={user.username}
//               onChange={handleChange}
//               required
//             />
//             {user.username.length < 5 ? (
//               <div style={{ textAlign: 'center', color: 'red' }}>
//                 <p style={{ fontSize: '1cap' }}>Not Valid User Name</p>
//               </div>
//             ) : (
//               <div style={{ textAlign: 'center', color: 'greenyellow' }}>
//                 <p style={{ fontSize: '1cap' }}>Valid User Name</p>
//               </div>
//             )}
//           </div>
//           <div className="form-group">
//             <label htmlFor="phoneNum">Mobile Number</label>
//             <input
//               type="tel"
//               id="phoneNum"
//               name="phoneNum"
//               className="form-control"
//               value={user.phoneNum}
//               onChange={handleChange}
//               required
//             />
//             {user.phoneNum.length === 11 ? (
//               <div style={{ textAlign: 'center', color: 'greenyellow', fontSize: '2cap' }}>
//                 <p style={{ fontSize: '1cap' }}>Valid Phone Number</p>
//               </div>
//             ) : (
//               <div style={{ textAlign: 'center', color: 'red' }}>
//                 <p style={{ fontSize: '1cap' }}>Not Valid Phone Number</p>
//               </div>
//             )}
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="form-control"
//               value={user.email}
//               onChange={handleChange}
//               required
//             />
//             {user.email.length < 10 ? (
//               <div style={{ textAlign: 'center', color: 'red' }}>
//                 <p style={{ fontSize: '1cap' }}>Not Valid Mail</p>
//               </div>
//             ) : (
//               <div style={{ textAlign: 'center', color: 'greenyellow' }}>
//                 <p style={{ fontSize: '1cap' }}>Valid Mail</p>
//               </div>
//             )}
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="form-control"
//               value={user.password}
//               onChange={handleChange}
//               required
//             />
//             {user.password.length < 5 ? (
//               <div style={{ textAlign: 'center', color: 'red' }}>
//                 <p style={{ fontSize: '1cap' }}>Not Valid password</p>
//               </div>
//             ) : (
//               <div style={{ textAlign: 'center', color: 'greenyellow' }}>
//                 <p style={{ fontSize: '1cap' }}>Valid password</p>
//               </div>
//             )}
//           </div>
//           <div className="form-group">
//             <label htmlFor="gender">Gender</label>
//             <select
//               id="gender"
//               name="gender"
//               className="form-control"
//               value={user.gender}
//               onChange={handleChange}
//             >
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="birthday">Birthday</label>
//             <input
//               type="date"
//               id="birthday"
//               name="birthday"
//               className="form-control"
//               value={user.birthday}
//               onChange={handleChange}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">Register</button>
//         </form>
//       </div>
//     // </div>
//   );
// };

// export default SignUp;



import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/Slice/userSlice';
import { useNavigate } from 'react-router-dom';
import '../Styles/StyleSignUp.css';
const SignUp = () => {
  const [user, setUser] = useState({
    username: '',
    phoneNum: '',
    email: '',
    password: '',
    gender: 'Male',
    birthday: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(user));
    navigate('/');
  };

  return (
    <div style={{ paddingBottom: '40px', paddingTop: '50px' }}>
    <div className="signup-container">
      <div className="signup-box">
        <div className="card bg-primary text-white">
          <div className="card-body text-center" style={{ backgroundColor: 'rgb(0, 112, 205)' }}>
            <h2>Sign Up</h2>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={user.username}
              onChange={handleChange}
              required
            />
            {user.username.length < 5 ? (
              <div style={{ textAlign: 'center', color: 'red' }}>
                <p style={{ fontSize: '1cap' }}>Not Valid User Name</p>
              </div>
            ) : (
              <div style={{ textAlign: 'center', color: 'greenyellow' }}>
                <p style={{ fontSize: '1cap' }}>Valid User Name</p>
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="phoneNum">Mobile Number</label>
            <input
              type="tel"
              id="phoneNum"
              name="phoneNum"
              className="form-control"
              value={user.phoneNum}
              onChange={handleChange}
              required
            />
            {user.phoneNum.length === 11 ? (
              <div style={{ textAlign: 'center', color: 'greenyellow', fontSize: '2cap' }}>
                <p style={{ fontSize: '1cap' }}>Valid Phone Number</p>
              </div>
            ) : (
              <div style={{ textAlign: 'center', color: 'red' }}>
                <p style={{ fontSize: '1cap' }}>Not Valid Phone Number</p>
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={user.email}
              onChange={handleChange}
              required
            />
            {user.email.length < 10 ? (
              <div style={{ textAlign: 'center', color: 'red' }}>
                <p style={{ fontSize: '1cap' }}>Not Valid Mail</p>
              </div>
            ) : (
              <div style={{ textAlign: 'center', color: 'greenyellow' }}>
                <p style={{ fontSize: '1cap' }}>Valid Mail</p>
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={user.password}
              onChange={handleChange}
              required
            />
            {user.password.length < 5 ? (
              <div style={{ textAlign: 'center', color: 'red' }}>
                <p style={{ fontSize: '1cap' }}>Not Valid password</p>
              </div>
            ) : (
              <div style={{ textAlign: 'center', color: 'greenyellow' }}>
                <p style={{ fontSize: '1cap' }}>Valid password</p>
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              className="form-control"
              value={user.gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="birthday">Birthday</label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              className="form-control"
              value={user.birthday}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
