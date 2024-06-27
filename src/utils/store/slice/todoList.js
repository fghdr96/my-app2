import { createSlice } from '@reduxjs/toolkit'

const initialState =  {
  works:[
     { title: "Read Book", done: false },
  { title: "Do the dishes", done: false },
  { title: "exercise", done: true },
  ]
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    add: (state,action) => {
    
      if (action.payload === "") {
        alert("Please enter task title");
      } else if (state.works.findIndex((work) => work.title === action.payload) < 0) {
       // setWorks([...works, { title: newWork, done: false }]);
  
        state.works.push({title: action.payload, done: false})
        state.newWork = '';
      } else {
        alert("This work is already exists :) ");
      }
    },
    toggleDone: (state,action) => {
      const index = action.payload;
      state.works[index].done = !state.works[index].done;
    },
    del: (state, action) => {
      const deleteIndex = action.payload;
        state.works.splice(deleteIndex, 1);
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, toggleDone, del } = todoListSlice.actions

export default todoListSlice.reducer