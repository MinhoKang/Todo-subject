import { createSlice } from '@reduxjs/toolkit';

const filteredStateSlice = createSlice({
  name: 'filteredState',
  initialState: 'Show All',
  reducers: {
    editFilter: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { editFilter } = filteredStateSlice.actions;
export default filteredStateSlice.reducer;
