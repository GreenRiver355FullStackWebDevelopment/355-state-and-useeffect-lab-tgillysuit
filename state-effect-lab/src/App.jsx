import { useState, useEffect } from 'react'
import './App.css'
import Pokemon from './components/Pokemon';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState([0, 20]);

  useEffect(() => {
    fetchPokemon();
  }, [page]);

  const fetchPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page[0]}&limit=${page[1]}`);
    const data = await res.json();
    
    setPokemon(data.results);
  };
  
  const onClickNext = () => {
    if(page[1] < 35) {
      setPage((prev) => [prev[0] + 20, prev[1] + 20]); 
    } else {
      setPage([0, 20]);
    }
  };

  const onClickBack = () => {
    if (page[0] <= 0) {
      setPage([0, 20]);
    } else {
      setPage(prev => [prev[0] - 20, prev[1] - 20])
    }
  };

  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <div className="main-container">
        <div>
          <Pokemon 
            pokemon={pokemon}
            onPokemonClick={fetchPokemon}
          />
          <div className="buttons">
            <button onClick={onClickBack}>Back</button>
            <button onClick={onClickNext}>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
