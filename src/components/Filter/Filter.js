import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from './filterSlice';

const Filter = () => {
  const { filter } = useSelector(state => state.filter)
  const dispatch = useDispatch();
  const handleFilter = (filterText) => {
    dispatch(setFilter(filterText))
  }

  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>
      <div className="flex items-center space-x-4">
        <button onClick={() => handleFilter('all')} className={`lws-filter-btn ${filter === 'all' && 'active-filter'}`}>All</button>
        <button onClick={() => handleFilter('featured')} className={`lws-filter-btn ${filter === 'featured' && 'active-filter'}`}>Featured</button>
      </div>
    </div>
  );
};

export default Filter;