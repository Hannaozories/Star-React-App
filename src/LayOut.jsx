import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/NavComponent/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/HomeComponent/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Contact from './Components/Contacts/Contact';

export default function LayOut() {
  return <>
    <Navbar />
    <Outlet/>
    <Footer />
  </>
}
