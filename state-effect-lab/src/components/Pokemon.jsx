import { useState } from 'react';
import { Box, Button } from '@mui/material';
import PokemonDetails from './PokemonDetails';

const Pokemon = ({ pokes }) => {
  const [pokemon, setPokemon] = useState(null);

  const handleClick = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setPokemon(data);
  };

  return (
    <Box>
      {/* Button Grid Container */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)', // five evenly spaced columns
          gap: 2,
          backgroundColor: '#222',
          p: 3,
          borderRadius: 2,
          maxWidth: '700px',
          margin: '0 auto',
        }}
      >
        {pokes.map((poke, idx) => (
          <Button
            key={idx}
            variant="contained"
            onClick={() => handleClick(poke.url)} // fetching the pokemon details when clicked.
            sx={{
              backgroundColor: '#444',
              color: 'white',
              '&:hover': { backgroundColor: '#666' },
            }}
          >
            {/* Displaying the Pokemon name in uppercase */}
            {poke.name.toUpperCase()}
          </Button>
        ))}
      </Box>

      {/* Details */}
      {pokemon && (
        <Box sx={{ mt: 4 }}>
          <PokemonDetails pokemon={pokemon} />
        </Box>
      )}
    </Box>
  );
};

export default Pokemon;
