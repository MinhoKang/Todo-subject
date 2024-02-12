import { createSlice } from '@reduxjs/toolkit';
import filteredState from './filteredState';
import toDoList from './toDoList';
import toDoListSlice from '../todoList/toDoList';

const filteredListSlice = createSlice({
  name: 'filteredList',
  initialState: [],
  reducers: {
    filterList: (state, action) => {
      const filterState = action.payload;
      //   state = action.payload;
      const list = toDoList;

      console.log('투두', toDoListSlice);
      console.log('list', list);
      //   const list = action.payload.todoList;

      switch (filterState) {
        case 'Show Completed':
          return (state = list.filter((item) => item.isComplete));
        case 'Show Proceeding':
          return (state = list.filter((item) => !item.isComplete));
        default:
          return (state = list);
      }
    },
  },
});

export const { filterList } = filteredListSlice.actions;
export default filteredListSlice.reducer;
