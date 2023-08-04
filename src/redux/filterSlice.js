import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'reduxjs-toolkit-persist';
// import storage from 'reduxjs-toolkit-persist/lib/storage';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact(state, action) {
      // console.log(filterContact(state));
      // console.log(filterContact(action));
      return (state = action.payload);
    },
  },
});

export const { filterContact } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// export const persistedFilterReducer = persistReducer(
//   persistConfig,
//   filterReducer
// );
