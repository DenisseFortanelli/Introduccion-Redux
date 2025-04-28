import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PokeState {
  page: number
  pokemons: any[]
  isLoading: boolean
}

interface SetPokemonsPayload {
  page: number
  pokemons: any[]
}

const initialState: PokeState = {
  page: 0,
  pokemons: [],
  isLoading: false,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action: PayloadAction<SetPokemonsPayload>) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    }
  }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;