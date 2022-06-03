import React, {useState, useEffect} from 'react';
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './Header.scss';

import {ReactComponent as Logo} from '../../images/HIRETERRA_logo.svg';
import OrangeButtonSmall from '../../ui/OrangeButtonSmall/OrangeButtonSmall';
import {ReactComponent as Close} from '../../images/close.svg';
import {ReactComponent as Burger} from '../../images/burger.svg';

const Header = () => {
  const [open, setIsOpen] = useState(false);
  const location = useLocation();
  

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    const menu = document.querySelector('.openBurger');

    if (menu) {
      body.style.overflow="hidden"
    } 
    else {
      body.style.overflow="auto"
    }
  }, [open])

  return (
    <header className="header">
      <div className="header__wrapper">
        <a href="/main">
          <Logo src="logo" className="header__logo"/>
        </a>
        <nav className="header__nav">
          <NavLink to="/recruiters" className="header__link">For recruiters</NavLink>
          <NavLink to="/candidates" className="header__link">Candidates</NavLink>
          <NavLink to="/jobs" className="header__link">Jobs</NavLink>
          <NavLink to="/contact" className="header__link">Contact us</NavLink>
          <NavLink to="/about" className="header__link">About us</NavLink>
          <NavLink to="/support" className="header__link">Support</NavLink>
          {/* <NavLink to="/blog" className="header__link">Blog</NavLink> */}
         
          <hr className="header__vert-line"/>

          <div className="header__buttons">
            <Link to="/singin" className="header__singin">Sing In</Link>
            <Link to="/singup" className="">
              <OrangeButtonSmall title="Sing Up"/>
            </Link> 
            <div className="header__burger" onClick={() => setIsOpen(!open)}>
              <Burger />
            </div>
          </div>
        </nav> 
      </div>

      <div className={`header__mobNav ${open ? "openBurger" : "closeBurger"}`}>
        <div className="header__mobNav-header">
          <Logo src="logo" className="header__logo"/>
          <div className="header__close" onClick={() => setIsOpen(!open)}>
            <Close />
          </div>
        </div>
        <div className="header__mobNav-wrapper">
          <Link to="/recruiters" className="header__mobNav-link">For recruiters</Link>
          <Link to="/candidates" className="header__mobNav-link">Candidates</Link>
          <Link to="/jobs" className="header__mobNav-link">Jobs</Link>
          <Link to="/contact" className="header__mobNav-link">Contact us</Link>
          <Link to="/about" className="header__mobNav-link">About us</Link>
          <Link to="/faq" className="header__mobNav-link">FAQ</Link>
          <Link to="/blog" className="header__mobNav-link">Blog</Link>
          <Link to="/singin" className="header__mobNav-link">Sing In</Link>
        </div>
      </div>
    </header>

  )
}

export default Header