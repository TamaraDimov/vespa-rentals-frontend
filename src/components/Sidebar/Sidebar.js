import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  FaFacebook, FaTwitter, FaGoogle, FaBars, FaTimes,
} from 'react-icons/fa';
import { BiLogoPinterestAlt } from 'react-icons/bi';
import { BsVimeo } from 'react-icons/bs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Sidebar.css';

import NavLinks from './Navlinks';
import Logo from '../../assets/logo.png';
import { logoutUser } from '../../redux/reducers/userSlice';
import StarRating from './Rating';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleLogout = () => {
    setTimeout(() => {
      dispatch(logoutUser());
      toast.success('Logout Successful!');
      navigate('/');
    }, 1000);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <button type="button" className="hamburger-menu" onClick={toggleSidebar}>
        { showSidebar ? <FaTimes /> : <FaBars /> }
      </button>
      <div className={`show-sidebar ${showSidebar ? 'show' : ''}`}>
        <div className="top-nav-container">
          <header>
            <img src={Logo} alt="logo" style={{ width: '200px' }} />
          </header>
          <NavLinks />
        </div>
        <button type="button" className="logout-button" onClick={handleLogout}>
          Logout
        </button>
        <div className="rating">
          <StarRating />
        </div>
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
    </>
  );
};

export default Sidebar;
