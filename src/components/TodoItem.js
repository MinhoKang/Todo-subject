import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, toggleComplete } from '../redux/store/todoList/toDoList';
import { filterList } from '../redux/store/todoList/filteredList';

const TodoItem = ({ item }) => {
  const toDoList = useSelector((state) => state.toDoList);
  const dispatch = useDispatch();

  const itemIndex = toDoList.findIndex((listItem) => listItem === item);

  const handleDelete = () => {
    dispatch(deleteItem(itemIndex));
  };
  const checkComplete = () => {
    dispatch(toggleComplete(item.id));
    dispatch(filterList(item));
  };
  return (
    <div>
      <ul>
        <li>{item.text}</li>
      </ul>
      <input type="checkbox" checked={item.isComplete} onChange={checkComplete} />
      <button onClick={handleDelete}>X</button>
    </div>
  );
};

export default TodoItem;
