import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BiSolidUser } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { loginUser, registerUser } from '../../redux/reducers/userSlice';
import logo from '../../assets/logo.png';
import logo1 from '../../assets/vespa.png';
import './Login-style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isMember, setIsMember] = useState(true);

  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !username) {
      toast.error('Please fill out all fields');
      return;
    }

    if (isMember) {
      dispatch(loginUser({ username, email, password }));
    } else {
      dispatch(registerUser({ username, email, password }));
    }
  };

  const toggleMember = () => {
    setIsMember(!isMember);
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/motorcycles');
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
              type="name"
              value={username}
              name="username"
              onChange={handleChange}
              className="input100"
              placeholder="Username"
            />
            <span className="focus-input100" data-placeholder="&#xf207;">
              <BiSolidUser className="input-icon" />
            </span>
          </div>

          <div
            className="wrap-input100 validate-input"
            data-validate="Enter email"
          >
            <input
              type="email"
              value={email}
              name="email"
              onChange={handleChange}
              className="input100"
              placeholder="Email"
            />
            <span className="focus-input100" data-placeholder="&#xf207;">
              <MdEmail className="input-icon" />
            </span>
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
              className="input100"
              placeholder="Enter password"
            />
            <span className="focus-input100" data-placeholder="&#xf207;">
              <RiLockPasswordFill className="input-icon" />
            </span>
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
        <div className="motor-logo">
          <img src={logo1} className="logo1" alt="logo1" />
        </div>
        <div className="register-button">
          <p className="member-text">
            {isMember ? 'Not a member yet?' : 'Already a member?'}
            <br />
            <button type="button" onClick={toggleMember} className="member-btn">
              {isMember ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
