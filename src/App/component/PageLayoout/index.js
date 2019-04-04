import React from 'react';
import PropTypes from 'prop-types';
import logo from './Fifa2.png';
import './index.scss';

function PageLayout({children, navLinks}) {
  return (
     
    <div className="Page-Layout">
      <header>
        <img src={logo} className="Logo" alt="Fifa 2019 Ball Logo" /> 
        <nav>{navLinks}</nav>
      </header>
      <main>{children}</main>
      <footer>Copyright © Fifa World Cup in 2019</footer>
    </div>
    
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  navLinks: PropTypes.arrayOf(PropTypes.node),
};

PageLayout.defaultProps = {
  navLinks: [],
};

export default PageLayout;
