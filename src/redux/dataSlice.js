import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    createDataFunc: (state, action) => {
      state.data = [...state.data, action.payload]
    },
    sortingDataFunc: (state, action) => {
      state.data = [...state.data.sort((a,b) => action.payload == "asc" ? a-b : action.payload == "desc" ? b-a : null)]
    },
    deleteDataFunc: (state, action) => {
      state.data = [...state.data.filter(dt => dt.id != action.payload)]
  },
  updateDataFunc: (state, action) => {
    state.data = [...state.data.map(dt => dt.id == action.payload.id ? ({...dt, ...action.payload}) : dt)]
},
}})

export const {createDataFunc, deleteDataFunc, updateDataFunc, sortingDataFunc} = dataSlice.actions

export default dataSlice.reducer