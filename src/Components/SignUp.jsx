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

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const validateInput = () => {
    let errors = {};
    let isValid = true;

    if (user.username.length < 5) {
      errors.username = 'Username must be at least 5 characters long';
      isValid = false;
    }

    if (!/^\d{11}$/.test(user.phoneNum)) {
      errors.phoneNum = 'Phone number must be 11 digits';
      isValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    if (!/(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(user.password)) {
      errors.password = 'Password must be at least 8 characters long and include at least one number, one special character, one lowercase, and one uppercase letter';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInput()) {
      setIsSubmitting(true);
      dispatch(addUser(user))
        .then(() => {
          setIsSubmitting(false);
          navigate('/');
        })
        .catch(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="card bg-primary text-white">
          <div className="card-body text-center" style={{ backgroundColor: 'rgb(0, 112, 205)' }}>
            <h2>Sign Up</h2>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username <span>*</span></label>
            <input
              type="text"
              name="username"
              className={`form-control ${errors.username && 'is-invalid'}`}
              value={user.username}
              onChange={handleChange}
              required
            />
            {errors.username && <div className="invalid-feedback">{errors.username}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="phoneNum">Mobile Number <span>*</span></label>
            <input
              type="tel"
              id="phoneNum"
              name="phoneNum"
              className={`form-control ${errors.phoneNum && 'is-invalid'}`}
              value={user.phoneNum}
              onChange={handleChange}
              required
            />
            {errors.phoneNum && <div className="invalid-feedback">{errors.phoneNum}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email <span>*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-control ${errors.email && 'is-invalid'}`}
              value={user.email}
              onChange={handleChange}
              required
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password <span>*</span></label>
            <input
              type="password"
              id="password"
              name="password"
              className={`form-control ${errors.password && 'is-invalid'}`}
              value={user.password}
              onChange={handleChange}
              required
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
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
              <option value="Male">Male</option>
              <option value="Female">Female</option>
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
          <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{marginLeft: '100px'}}>
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
          <button className="btn btn-primary" onClick={() => navigate('/login')} style={{marginLeft: '50px'}}>
            Go to Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

