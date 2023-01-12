import { api } from '../../instance';

export const requestPokemon = (page: number) => {
  return api.get('pokemon', {
    params: { offset: page, limit: 20 }
  });
};
