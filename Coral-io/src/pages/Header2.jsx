import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router';
import Navbar2 from '../components/Layout/Header2/Navbar';
import Sidebar2 from '../components/Layout/Header2/Sidebar';

const Header2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar2 isOpen={isOpen} toggle={toggle} />
      <Navbar2 toggle={toggle} />
      <Outlet />
    </>
  );
};

export default Header2;
