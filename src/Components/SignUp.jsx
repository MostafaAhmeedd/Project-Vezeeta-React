import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../Redux/Slice/userSlice';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Redux/Slice/userSlice';
import '../Styles/SignUpStyle.css';

const SignUp = () => {
  const [user, setUser] = useState({
    name: '',
    phoneNum: '',
    email: '',
    password: '',
    gender: 'Male',
    birthday: '',
  });

  const [emailExists, setEmailExists] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.user.users);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (name === 'email') {
      setEmailExists(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isEmailUnique = true;
    for (let existingUser of users) {
      if (existingUser.email === user.email) {
        isEmailUnique = false;
        break;
      }
    }

    if (validateInput() && isEmailUnique) {
      setEmailExists(false);
      dispatch(addUser(user)).then(() => {
        dispatch(loginUser(user));
        navigate('/');
      });
    } else {
      if (!isEmailUnique) {
        setEmailExists(true);
      } else {
        alert('Username or input validation failed.');
      }
    }
  };

  const validateInput = () => {
    const isValidUsername = user.name.length >= 5;
    const isValidPhoneNum = /^\d{11}$/.test(user.phoneNum);
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/.test(user.password);

    return isValidUsername && isValidPhoneNum && isValidEmail && isValidPassword;
  };

  return (
    <div style={{ paddingBottom: '40px', paddingTop: '50px' }}>
      <div className="signup-container">
        <div className="signup-box">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Username <span style={{ color: 'red' }}>*</span></label>
              <input
                type="text"
                name="name"
                className={`form-control ${user.name.length < 5 ? 'is-invalid' : 'is-valid'}`}
                value={user.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNum">Mobile Number <span style={{ color: 'red' }}>*</span></label>
              <input
                type="tel"
                id="phoneNum"
                name="phoneNum"
                className={`form-control ${!/^\d{11}$/.test(user.phoneNum) ? 'is-invalid' : 'is-valid'}`}
                value={user.phoneNum}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email <span style={{ color: 'red' }}>*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-control ${!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email) ? 'is-invalid' : 'is-valid'}`}
                value={user.email}
                onChange={handleChange}
                required
              />
              {emailExists && (
                <div style={{ textAlign: 'center', color: 'red' }}>
                  <p>Email already exists. Please use a different email.</p>
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password <span style={{ color: 'red' }}>*</span></label>
              <input
                type="password"
                id="password"
                name="password"
                className={`form-control ${!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/.test(user.password) ? 'is-invalid' : 'is-valid'}`}
                value={user.password}
                onChange={handleChange}
                required
              />
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
            <div className="form-group text-center">
              <button style={{ marginRight: '10px' }} type="submit" className="btn btn-primary">Register</button>
              <button type="button" className="btn btn-primary" onClick={() => navigate('/login')}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
