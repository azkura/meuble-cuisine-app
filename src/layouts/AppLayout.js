// src/layouts/AppLayout.js
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './AppLayout.css';

const AppLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <NavBar />
      <div className="content-wrap">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
