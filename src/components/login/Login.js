import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BiSolidUser } from 'react-icons/bi';
import { RiLockPasswordFill } from 'react-icons/ri';
// import { toast } from 'react-toastify';
import { loginUser, registerUser } from '../../redux/reducers/userSlice';
import logo from '../../assets/logo.png';
import logo1 from '../../assets/vespa.png';
import './Login-style.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isMember, setIsMember] = useState(true);

  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert.error('Please fill out all fields');
      return;
    }

    if (isMember) {
      dispatch(loginUser({ username, password }));
    } else {
      dispatch(registerUser({ username, password }));
    }
  };

  const toggleMember = () => {
    setIsMember(!isMember);
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/homepage');
      }, 500);
    }
  }, [user, navigate]);

  return (
    <div className="bg-img">
      <form onSubmit={onSubmit} className="form">
        <img src={logo} className="logo" alt="logo" />
        <h3 className="form-title">{isMember ? 'Login' : 'Register'}</h3>
        <div className="form-row">
          <div
            className="wrap-input100 validate-input"
            data-validate="Enter username"
          >
            <input
              type="text"
              value={username}
              name="username"
              onChange={handleChange}
              className="form-input"
            />
            <BiSolidUser className="focus-input100" />
          </div>
          <div
            className="wrap-input100 validate-input"
            data-validate="Enter password"
          >
            <input
              type="password"
              value={password}
              name="password"
              onChange={handleChange}
              className="form-input"
            />
            <RiLockPasswordFill className="focus-input100" />
          </div>
        </div>
        <button
          type="submit"
          className="login100-form-btn btn-block"
          disabled={isLoading}
        >
          {isLoading ? 'Loading' : 'Submit'}
        </button>
      </form>
      <section className="member">
        <img src={logo1} className="logo1" alt="logo1" />
        <p className="member-text">
          {isMember ? 'Not a member yet?' : 'Already a member?'}
          <br />
          <button type="button" onClick={toggleMember} className="member-btn">
            {isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </section>
    </div>
  );
};

export default Login;
