import { configureStore } from '@reduxjs/toolkit';
import toDoListSlice from './todoList/toDoList';
import filteredListSlice from './todoList/filteredList';
import filteredStateSlice from './todoList/filteredState';

export default configureStore({
  reducer: {
    toDoList: toDoListSlice,
    filteredList: filteredListSlice,
    filteredState: filteredStateSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});
