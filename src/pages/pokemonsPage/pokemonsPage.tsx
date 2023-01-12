import React, { useState } from 'react';
import { useRequestPokemonsQuery } from '../../utils/api/hooks/pokemon';

export const PokemonsPage: React.FC = () => {
  const [page, setPage] = useState(20);
  const { data, isLoading } = useRequestPokemonsQuery(page);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data);
  return (
    <>
      <div>
        {data?.map((result) => (
          <div key={result.url}>{result.name}</div>
        ))}
      </div>
      <button onClick={() => setPage((old) => old + 20)}>next</button>
      <button onClick={() => setPage((old) => old - 20)}>prev</button>
    </>
  );
};
