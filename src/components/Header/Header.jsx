import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom'
import './header.scss';
import logo from '../../assets/images/logo.svg';
import person from '../../assets/images/person.svg';
import arrowDown from '../../assets/images/arrow-down.svg';
import menu from '../../assets/images/menu-white-18dp.svg';

const Header = (props) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  return (
    <div className='header'>
      <div className='logo-section' onClick={() => props.history.push('/')}>
        <img src={logo} alt="none"/>
      </div>
      <div className='right-navigations'>
        <a href="" className='nav-link'>SOFUNKTIONIERT’S</a>
        <a href="" className='nav-link'>SONDERANGEBOTE</a>
        <div className='dropdown-section' onClick={() => setDropdownVisible(!dropdownVisible)}>
          <img src={person} alt=""/>
          <p>MEIN BEREICH</p>
          <img src={arrowDown} alt=""/>
          {dropdownVisible &&  <div className='dropdown-body'>
            <a href="" className='dropdown-link'>My published jokes</a>
            <hr/>
            <a href="" className='dropdown-link'>My saved jokes</a>
            <hr/>
            <a href="" className='dropdown-link'>Account Information</a>
            <hr/>
            <a href="" className='dropdown-link active'>Publish new joke</a>
          </div>}
        </div>
      </div>
      <img className='menu-btn' src={menu} alt=""/>
    </div>
  );
}
export default withRouter(Header);
