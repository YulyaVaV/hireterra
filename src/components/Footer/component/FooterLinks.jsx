import React from 'react';
import { Link } from "react-router-dom";
import './FooterLinks.scss';

const footerLinks = [
  {
    name: 'For recruiters',
    way: '/recruiters',
  },  
  {
    name: 'Candidates',
    way: '/candidates',
  },
  {
    name: 'Jobs',
    way: '/jobs',
  },
  {
    name: 'Contact us',
    way: '/contact',
  },
  {
    name: 'About us',
    way: '/about',
  },  
  {
    name: 'FAQ',
    way: '/faq',
  },
  {
    name: 'Blog',
    way: '/blog',
  },
  {
    name: '    ',
    way: '',
  },
  {
    name: '    ',
    way: '',
  },
  {
    name: 'Privacy',
    way: '/',
  },  
  {
    name: 'Terms of use',
    way: '/',
  },
  {
    name: 'Referral Terms',
    way: '/',
  },
  {
    name: 'Support',
    way: '/',
  },
]

const FooterLinks = () => {
  return (
    <div className="footer-link">
        {
          footerLinks.map(item => (
            <Link to={item.way} className="footer-link__link">{item.name}</Link>
          ))
        }
    </div>
  )
}

export default FooterLinks