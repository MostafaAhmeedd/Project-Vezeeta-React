import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, fetchUsers } from '../Redux/Slice/userSlice';
import { useNavigate } from 'react-router-dom';
import '../Styles/StyleLogin.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(loginUser(credentials));
    if (!error && user) {
      navigate('/');
    }else{
      navigate('/login');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="card bg-primary text-white">
          <div className="card-body text-center" style={{ backgroundColor: 'rgb(0, 112, 205)' }}>
            <h2>Login</h2>
          </div>
        </div>
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
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
