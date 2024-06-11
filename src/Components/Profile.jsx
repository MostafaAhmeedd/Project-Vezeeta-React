import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../Redux/Slice/userSlice';
import '../Styles/ProfileStyle.css';

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editUser, setEditUser] = useState({ ...user });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const validateName = (name) => {
    return name.length >= 5;
  };

  const validateEmail = (email) => {
    return email.includes('@') && email.endsWith('.com');
  };

  const validatePhone = (phoneNum) => {
    return /^\d{11}$/.test(phoneNum);
  };

  const validatePassword = (password) => {
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    return password.length >= 8 && hasNumber.test(password) && hasSpecialChar.test(password) && hasUpperCase.test(password) && hasLowerCase.test(password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    switch (name) {
      case 'name':
        setErrors((prevState) => ({
          ...prevState,
          name: validateName(value) ? '' : 'Invalid name address',
        }));
        break;
      case 'email':
        setErrors((prevState) => ({
          ...prevState,
          email: validateEmail(value) ? '' : 'Invalid email address',
        }));
        break;
      case 'phoneNum':
        setErrors((prevState) => ({
          ...prevState,
          phoneNum: validatePhone(value) ? '' : 'Invalid phone number',
        }));
        break;
      case 'password':
        setErrors((prevState) => ({
          ...prevState,
          password: validatePassword(value) ? '' : 'Password must be at least 8 characters long, include a number, a special character, an uppercase letter, and a lowercase letter',
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.name && !errors.email && !errors.phoneNum && !errors.password) {
      dispatch(updateUser(editUser));
      navigate('/');
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-box">
        <h2>Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name <span style={{ color: 'red' }}>*</span></label>
            <input
              type="name"
              name="name"
              className={`form-control ${errors.name ? 'is-invalid' : 'is-valid'}`}
              value={editUser.name}
              onChange={handleChange}
              required
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email <span style={{ color: 'red' }}>*</span></label>
            <input
              type="email"
              name="email"
              className={`form-control ${errors.email ? 'is-invalid' : 'is-valid'}`}
              value={editUser.email}
              onChange={handleChange}
              required
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="phoneNum">Mobile Number <span style={{ color: 'red' }}>*</span></label>
            <input
              type="tel"
              name="phoneNum"
              className={`form-control ${errors.phoneNum ? 'is-invalid' : 'is-valid'}`}
              value={editUser.phoneNum}
              onChange={handleChange}
              required
            />
            {errors.phoneNum && <div className="invalid-feedback">{errors.phoneNum}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password <span style={{ color: 'red' }}>*</span></label>
            <input
              type="password"
              name="password"
              className={`form-control ${errors.password ? 'is-invalid' : 'is-valid'}`}
              value={editUser.password}
              onChange={handleChange}
              required
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              className="form-control"
              value={editUser.gender}
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
              name="birthday"
              className="form-control"
              value={editUser.birthday}
              onChange={handleChange}
            />
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>    
    );
  };
  
  export default Profile;
  