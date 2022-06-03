import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import About from './view/About/About';
import Blog from './view/Blog/Blog';
import Candidates from './view/Candidates/Candidates';
import Contact from './view/ContactUs/Contact';
import Faq from './view/Faq/Faq';
import Home from './view/Home/Home';
import Jobs from './view/Jobs/Jobs';
import OneVacancy from './view/OneVacancy/OneVacancy';
import Privacy from './view/Privacy/Privacy';
import Recruiters from './view/Recruiters/Recruiters';
import SingIn from './view/SingIn/SingIn';
import SingUp from './view/SingUp/SingUp';
import Support from './view/Support/Support'

const routers = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/recruiters',
    element: <Recruiters />
  },
  {
    path: '/candidates',
    element: <Candidates />
  },
  {
    path: '/jobs',
    element: <Jobs />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/faq',
    element: <Faq />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/singin',
    element: <SingIn />
  },
  {
    path: '/singup',
    element: <SingUp />
  },
  {
    path: '/support',
    element: <Support />
  },
  {
    path: '/onevacancy',
    element: <OneVacancy />
  },
  {
    path: '/privacy',
    element: <Privacy />
  },
  {
    path: '*',
    element: <Navigate replace to="/" />
  },
]

const Routers = () => {
  return (
    <Routes>
      {
        routers.map(({ path, element }) => (
          <Route 
            path={path}
            element={element}
          />
        ))
      }
    </Routes>
  )
}

export default Routers