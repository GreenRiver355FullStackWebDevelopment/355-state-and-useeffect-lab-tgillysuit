import { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Pokemon from './components/Pokemon';

function App() {
  const [pokemon, setPokemon] = useState([]); // State to hold the list of 20 Pokemon for current page
  const [page, setPage] = useState(0); // State to track the offset for pagination (0, 20, 40, ...)

  // Fetch Pokemon when component mounts or page changes
  useEffect(() => {
    fetchPokemon();
  }, [page]);

  // Fetch a batch of Pokemon from the PokeAPI
  const fetchPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`);
    const data = await res.json();
    setPokemon(data.results); // Store the Pokemon list in state
  };

  const handleNext = () => setPage((prev) => prev + 20); // Go to next page (increase the offset by 20)
  const handleBack = () => setPage((prev) => Math.max(prev - 20, 0)); // Go to previous page (min 0)

  return (
    <Box
      sx={{
        backgroundColor: '#d90404',
        minHeight: '100vh',
        color: 'white',
        textAlign: 'center',
        p: 4
      }}
    >
      <Typography variant="h3" gutterBottom>
        Pokémon List
      </Typography>

      {/* Display the Pokemon buttons and details */}
      <Pokemon pokes={pokemon} />

      <Box sx={{ mt: 3 }}>
        <Button
          variant="contained"
          sx={{ mr: 3, backgroundColor: 'grey' }}
          onClick={handleBack}
          disabled={page === 0}
        >
          Back
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: 'gold', color: 'black' }}
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default App;
