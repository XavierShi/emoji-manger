import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 1,
    title: 'redux counterSlice',
  },
  reducers: {
    increment(state, { payload }) {
      state.count += payload.step
    },
  },
})

export const { increment } = counterSlice.actions

export default counterSlice.reducer
