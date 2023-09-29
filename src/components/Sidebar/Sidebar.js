import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa';
import { BiLogoPinterestAlt } from 'react-icons/bi';
import { BsVimeo } from 'react-icons/bs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Sidebar.css';

import NavLinks from './Navlinks';
import Logo from '../../assets/logo.png';
import { logoutUser } from '../../redux/reducers/userSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    setTimeout(() => {
      dispatch(logoutUser());
      toast.success('Logout Successful!');
      navigate('/');
    }, 1000);
  };

  return (
    <div className="show-sidebar">
      <div className="top-nav-container">
        <header>
          <img src={Logo} alt="logo" style={{ width: '200px' }} />
        </header>
        <NavLinks />
      </div>
      <button type="button" className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      <div className="footer">
        <div className="social_links">
          <FaTwitter />
          <FaFacebook />
          <FaGoogle />
          <BsVimeo />
          <BiLogoPinterestAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
