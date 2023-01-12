import { useQuery } from 'react-query';
import { requestPokemon } from '../../requests/';

export const useRequestPokemonsQuery = (page: number) =>
  useQuery(
    ['pokemon', page],
    () => requestPokemon(page).then((pokemon) => pokemon.data.results),
    {
      keepPreviousData: true
    }
  );

// export const api = axios.create({
//   baseURL: `https://pokeapi.co/api/v2/`
// });

// export const requestPokemon = ({ page, limit }) => {
//   return api.get('pokemon', { page, limit });
// };

// useQuery<any>(
//   ['pokemon', page],
//   () => {
//     return fetch(
//       `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${page}`
//     ).then((res) => res.json());
//   },
//   { keepPreviousData: true }
// );
