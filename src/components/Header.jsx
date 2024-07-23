import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../constants';

export const Header = () => {
  return (
    <>
        <h1 id='main-title'>What <span className='yellow'>Pokémon</span> are you?</h1>
        <p id='subtext'>Find&nbsp; out&nbsp; now!</p>
        <nav>
          {navLinks.map((navLink, index) => {
            return (
              <Link to={navLink.path} style={{textDecoration: 'none'}} key={index}>
              <p>{navLink.label}</p>
              </Link>
            )
          })}
        </nav>
    </>
  )
}
