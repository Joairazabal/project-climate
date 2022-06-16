import React from 'react';
import Logo from './build/logo cloud.png';
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='contain'>
      <img src={Logo} height={"150px"} alt="img not found" />
      <h1>Climate App</h1>
      <SearchBar onSearch = {onSearch}/>
    </div>
  );
};

export default Nav;
