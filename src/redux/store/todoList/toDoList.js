import { createSlice } from '@reduxjs/toolkit';

let toDoListSlice = createSlice({
  name: 'toDoList',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.splice(action.payload, 1);
      //   return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
    },
    toggleComplete: (state, action) => {
      const itemIndex = state.findIndex((listItem) => listItem.id === action.payload);
      state[itemIndex].isComplete = !state[itemIndex].isComplete;
    },
  },
});

export const { addItem, deleteItem, toggleComplete } = toDoListSlice.actions;
export default toDoListSlice.reducer;
