import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { PokemonsPage } from './pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PokemonsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
