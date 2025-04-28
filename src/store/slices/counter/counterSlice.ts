import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  counter: number
}

const initialState: CounterState = {
  counter: 10,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => {
        if(state.counter > 0){
        state.counter -= 1
        }
        else{
            state.counter = 0
        }
    },
    incrementby: (state, action:PayloadAction<number>) => {
        state.counter += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementby } = counterSlice.actions