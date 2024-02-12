import './App.css';
import styled from 'styled-components';
import TodoInput from './components/TodoInput';
import { useSelector } from 'react-redux';
import TodoItem from './components/TodoItem';
import Filter from './components/Filter';

function App() {
  const todoList = useSelector((state) => state.toDoList);
  const filteredList = useSelector((state) => state.filteredList);
  const n = useSelector((state) => state.toDoList);
  console.log('todoList', n);
  console.log('filteredList', filteredList);
  return (
    <div>
      <div>
        <h2>Todo List</h2>
        <TodoInput />
      </div>
      <Filter />
      <div>
        <h2>todo List History</h2>
        <section>
          {todoList.map((item) => (
            <TodoItem key={item.id} item={item} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
