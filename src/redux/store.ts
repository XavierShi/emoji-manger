import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
// configureStore创建一个redux数据
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})

// 导出 RootState 和 AppDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
