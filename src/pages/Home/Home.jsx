import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom'
import Search from '../../components/Search';
import Categories from '../../components/Categories';
import Card from '../../components/Card';
import {getJokes} from '../../common/utils/api';
import './home.scss';

const Home = (props) => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paginationConfig, setPaginationConfig] = useState({
    limit: 10,
    offset: 0,
    search: ''
  });
  const init = async () => {
    setLoading(true);
    const data = await getJokes(paginationConfig);
    setJokes(jokes.concat(data.data.jokes));
    setLoading(false);
  }
  const onJokeClick = (id) => {
    props.history.push(`/joke/${id}`);
  }
  const onCategoryClick = (cat) => {
    setJokes([]);
    setPaginationConfig({
      limit: 10,
      offset: 0,
      search: cat
    });
  }

  const loadMore = () => {
    const filter = {...paginationConfig};
    setPaginationConfig({offset: filter.offset+10, ...filter});
  }

  const onSearch = (e) => {
    setJokes([]);
    setPaginationConfig({
      limit: 10,
      offset: 0,
      search: e.target.value
    });
  }

  useEffect(async () => {
    init();
  }, [paginationConfig]);
  return (
    <div>
      <Search onSearch={onSearch}></Search>
      <Categories onCategoryClick={onCategoryClick}></Categories>
      <div className='joke-section'>
        {jokes.map((joke, index) => (
          <Card key={joke._id} _id={joke._id} handleClick={onJokeClick} categories={joke.categories}
                value={joke.value}></Card>))}
      </div>
      {loading ?
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div> : ''}
      <div className='load-more'>
        <button className='view-more' onClick={() => loadMore()}>
          View More
        </button>
      </div>
    </div>
  );
}

export default withRouter(Home);
