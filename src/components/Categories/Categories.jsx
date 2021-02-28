import React, {useEffect, useState} from 'react';
import './categories.scss';
import {getCategories} from '../../common/utils/api';
const Categories = (props) => {

  const [categories, setCategories] = useState([]);
  useEffect(async () => {
    const data = await getCategories();
    setCategories(data.data.categories);
  }, []);
  return (
    <div className='categories'>
      {categories.map((cat, index) => (<div onClick={()=> props.onCategoryClick(cat.name)} key={index} className='category-btn'>{cat.name}
      </div>))}
    </div>
  );
}

export default Categories;
