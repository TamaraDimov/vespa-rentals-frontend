import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import links from './links';

// Provide a default no-op function for handleLinkClick
const NavLinks = ({ handleLinkClick = () => {} }) => (
  <div className="nav-links">
    {links.map((link) => {
      const { text, id, path } = link;
      return (
        <NavLink
          to={path}
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          key={id}
          onClick={() => {
            handleLinkClick();
          }}
          end
        >
          {text}
        </NavLink>
      );
    })}
  </div>
);

NavLinks.propTypes = {
  handleLinkClick: PropTypes.func,
};

NavLinks.defaultProps = {
  handleLinkClick: () => {},
};

export default NavLinks;
