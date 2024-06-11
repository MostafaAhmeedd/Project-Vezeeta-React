import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Redux/Slice/userSlice';
import { useNavigate } from 'react-router-dom';
import '../Styles/LoginStyle.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(loginUser(credentials));
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && (
            <div style={{ textAlign: 'center', color: 'red' }}>
              <p>{error}</p>
            </div>
          )}
          <button style={{ marginLeft: "190px", marginTop: "10px", marginBottom: "20px" }} type="submit" className="btn btn-primary">Login</button>
        </form>
        <div className="signup-link">
          <p>Don't have an account? <span onClick={handleSignUp} style={{ cursor: 'pointer', color: 'rgb(0, 112, 205)', textDecoration: 'underline' }}>Sign Up</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
