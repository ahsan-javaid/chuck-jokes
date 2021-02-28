import React, {useEffect, useState} from 'react';
import {withRouter, Link} from 'react-router-dom'
import Search from '../../components/Search';
import {getJoke} from '../../common/utils/api';
import {likeJoke} from '../../common/utils/api';
import {dislikeJoke} from '../../common/utils/api';
import './joke.scss';
import jokeTitle from "../../assets/images/joke-title-icon.svg";
import arrowRight from "../../assets/images/arrow-right.svg";
import arrowBack from "../../assets/images/arrow-left.svg";
import like from "../../assets/images/like.svg";
import dislike from "../../assets/images/dislike.svg";

const Joke = (props) => {
  const {match: {params}} = props;
  const [joke, setJoke] = useState({});
  const [loading, setLoading] = useState(true);

  const init = async () => {
    setLoading(true);
    setJoke({});
    const data = await getJoke(params.id);
    setJoke(data.data.joke);
    setLoading(false);
  }
  useEffect(async () => {
    init();
  }, []);

  const onLike = async (id) => {
    await likeJoke(id);
    init();
  }

  const onDislike = async (id) => {
    await dislikeJoke(id);
    init();
  }

  return (
    <div>
      <Search></Search>
      <div className='back-btn'>
        <Link to={'/'}>
          <img src={arrowBack} alt=""/>
        </Link>
      </div>
      {loading ? <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div> : <div>
        <div className='joke-details'>
          <div className='joke-title'>
            <img src={jokeTitle} alt=""/> {joke.categories.map((c, i) => (
            <span>{c}</span>))} {joke.categories.length ? ' Joke' : 'Lorum ipsum'}
          </div>
          <div className='joke-body'>
            {joke.value}
          </div>
        </div>
        <div className='joke-action-btns'>
          <div className='like-section' onClick={() => onLike(joke._id)}>
            <div className='like'>
              <img src={like} alt=""/>
            </div>
            <div className='like-count'>
              {joke.likes}
            </div>
          </div>
          <div className='dislike-section' onClick={() => onDislike(joke._id)}>
            <div className='dlike'>
              <img src={dislike} alt=""/>
            </div>
            <div className='dlike-count'>
              {joke.dislikes}
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default withRouter(Joke);
