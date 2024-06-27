import { configureStore } from '@reduxjs/toolkit'
import todoListReducer from './slice/todoList';


export const store = configureStore({
  reducer: {
    todoList : todoListReducer
  },
});

//export const persistor = persistStore(store);