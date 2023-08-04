import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit';
import { persistReducer } from 'reduxjs-toolkit-persist';
import { contactsReducer, persistedContactsReducer } from './contactsSlice';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import { filterReducer } from './filterSlice';
import { persistStore } from 'reduxjs-toolkit-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

export const reducer = combineReducers({ contacts: contactsReducer });

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer);

export const storeF = configureStore({
  reducer: {
    // contacts: persistedContactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
