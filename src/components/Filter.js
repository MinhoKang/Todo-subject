import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterList } from '../redux/store/todoList/filteredList';
import { editFilter } from '../redux/store/todoList/filteredState';

const Filter = () => {
  const nowFilter = useSelector((state) => state.filteredState);
  const dispatch = useDispatch();
//   const [filter, setFilter] = useState(nowFilter);

  const changeFilter = (event) => {
    const value = event.target.value;
    // setFilter(value);
    dispatch(editFilter(value));
  };

  useEffect(() => {
    dispatch(filterList(nowFilter));
  }, [nowFilter, dispatch]);

  return (
    <div>
      Filter
      <select value={nowFilter} onChange={changeFilter}>
        <option value="Show All">전체</option>
        <option value="Show Completed">완료</option>
        <option value="Show Proceeding">진행 중</option>
      </select>
    </div>
  );
};

export default Filter;
