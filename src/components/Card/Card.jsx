import React, {useEffect, useState} from 'react';
import './card.scss';
import jokeTitle from '../../assets/images/joke-title-icon.svg';
import arrowRight from '../../assets/images/arrow-right.svg';


const Card = (props) => {

  useEffect(async () => {
  }, []);
  return (
    <div className='card' key={props._id+'card'} onClick={() => props.handleClick(props._id)}>
      <div className='card-title'>
        <img src={jokeTitle} alt=""/> {props.categories.map((c,i) => (<span key={i}>{c}</span>))} {props.categories.length ? ' Joke': 'Lorum ipsum'}
      </div>
      <div className='card-body'>
        {props.value}
      </div>
      <div className='card-action'>
        <p className='see-stat'>SEE STATS</p>
        <img src={arrowRight} alt=""/>
      </div>
    </div>
  );
}

export default Card;
