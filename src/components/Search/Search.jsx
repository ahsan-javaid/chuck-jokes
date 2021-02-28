import React, {useEffect, useState} from 'react';
import './search.scss';
import searchIcon from '../../assets/images/search-icon.svg';

const Search = (props) => {

  return (
    <div className='search'>
      <div className='title'>The Joke Bible</div>
      <div className='sub-heading'>Daily Laughs for you and yours</div>
      <div className='search-box'>
        <img className='search-icon' src={searchIcon} alt=""/>
        <input onChange={(e) => props.onSearch(e)} type="text" placeholder='How can we make you laugh today?' />
      </div>
    </div>
  );
}

export default Search;
