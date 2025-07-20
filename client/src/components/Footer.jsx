import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram
} from 'lucide-react';
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className= "text-black py-8 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-row items-center gap-1 text-2xl font-bold text-primary">
        <img src={Logo} className='h-10 w-10'/>
        <NavLink to={'/'}>DonorConnect</NavLink>
        </div>

        <div className="flex gap-6 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-primary' : 'hover:text-primary'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-primary' : 'hover:text-primary'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-primary' : 'hover:text-primary'
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-primary' : 'hover:text-primary'
            }
          >
            Privacy Policy
          </NavLink>
        </div>

        <div className="flex gap-4 text-lg">
          <a href="#" className="hover:text-primary" aria-label="Facebook">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-primary" aria-label="Twitter">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-primary" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-primary/70">
        &copy; {new Date().getFullYear()} DonorConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
