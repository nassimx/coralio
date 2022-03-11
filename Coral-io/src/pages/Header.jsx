import React from 'react';
import Navbar from '../components/Layout/Header/Navbar';
import Sidebar from '../components/Layout/Header/Sidebar';
import { useState } from 'react';
import { Outlet } from 'react-router';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Outlet />
    </>
  );
};

export default Header;
