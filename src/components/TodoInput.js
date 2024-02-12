import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/store/todoList/toDoList';

const TodoInput = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSelector((state) => state.toDoList);
  console.log(setTodoList);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const addListItem = () => {
    if (inputValue.trim() !== '') {
      dispatch(
        addItem({
          id: getId(),
          text: inputValue,
          isComplete: false,
        })
      );
    }
    if (!inputValue) {
      alert('내용을 입력하세요');
    }
    setInputValue('');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={addListItem}>Add</button>
    </div>
  );
};

let id = 0;
function getId() {
  return id++;
}

export default TodoInput;
