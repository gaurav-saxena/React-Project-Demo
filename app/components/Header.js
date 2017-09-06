import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ()=>{
  return(
      <ul className='nav'>
        <li><NavLink exact activeClassName='active' to='/'>Home</NavLink></li>
        <li><NavLink activeClassName='active' to='/battle'>User Battle</NavLink></li>
        <li><NavLink activeClassName='active' to='/popular'>Top 10 Repos</NavLink></li>
      </ul>
  );
};

export default Header;
