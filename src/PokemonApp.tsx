import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';// Ajusta la ruta según tu estructura
import { AppDispatch, RootState } from './store/store';
import { getPokemons } from './store/slices/pokemon/thuks';

export const PokemonApp = () => {
  // Tipamos correctamente el dispatch y useSelector
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, pokemons = [], page } = useSelector((state: RootState) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: {isLoading ? 'True' : 'False'}</span>

      <ul>
        {
          // Verificamos que pokemons es un array antes de hacer map
          Array.isArray(pokemons) ? (
            pokemons.map((pokemon) => (
              // Si pokemon es un string
              typeof pokemon === 'string' ? (
                <li key={pokemon}>{pokemon}</li>
              ) : (
                // Si pokemon es un objeto con propiedad name
                <li key={pokemon.name}>{pokemon.name}</li>
              )
            ))
          ) : (
            <li>No hay pokemons disponibles</li>
          )
        }
      </ul>

      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}
      >
        Next
      </button>
    </>
  );
};

export default PokemonApp;