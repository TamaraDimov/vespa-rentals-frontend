import React from 'react';
import { useDispatch } from 'react-redux';
import { FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa';

import NavLinks from './Navlinks';
import Logo from '../../assets/logo.png';
import { logoutUser } from '../../redux/reducers/userSlice';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    setTimeout(() => {
      dispatch(logoutUser());
      alert.success('USER LOGGED OUT!');
    }, 1000);
  };

  return (
    <div className="show-sidebar">
      <header>
        <img src={Logo} alt="logo" style={{ width: '100px' }} />
      </header>
      <NavLinks />
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      <div className="footer">
        <div className="social_links">
          <FaTwitter />
          <FaFacebook />
          <FaGoogle />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
