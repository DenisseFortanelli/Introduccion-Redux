import { pokemonApi } from '../../../api/pokemonApi';
import { AppDispatch} from '../../store';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
  return async (dispatch: AppDispatch) => {
    dispatch(startLoadingPokemons());

    try {
      // Realizar petición http con axios
      const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
      
      // Asumiendo que data.results es un array de objetos pokemon con al menos una propiedad name
      const pokemonNames = data.results.map((pokemon: any) => pokemon.name);
      
      dispatch(setPokemons({ 
        pokemons: pokemonNames, 
        page: page + 1 
      }));
    } catch (error) {
      console.error('Error cargando pokemons:', error);
      // Aquí podrías despachar una acción de error si la tienes
    }
  };
};