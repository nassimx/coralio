import React from 'react';
import Navbar from '../components/Layout/Header2/Navbar';
import Sidebar from '../components/Layout/Header2/Sidebar';
import { useState } from 'react';
import { Outlet } from 'react-router';

const Header2 = () => {
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

export default Header2;
