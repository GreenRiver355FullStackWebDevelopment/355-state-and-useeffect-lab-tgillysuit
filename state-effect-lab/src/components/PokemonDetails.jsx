import { Box, Typography } from '@mui/material';

const PokemonDetails = ({ pokemon }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#e0e0e0',
        color: '#333',
        borderRadius: 3,
        p: 3,
        maxWidth: '300px',
        mx: 'auto'
      }}
    >
      {/* Pokemon Name */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </Typography>
      
      {/* Poke IMG */}
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      
      {/* Height */}
      <Typography mt={2}>Height: {pokemon.height}</Typography>

      {/* Weight */}
      <Typography>Weight: {pokemon.weight}</Typography>

      {/* Types */}
      <Typography>
        Type: {pokemon.types.map((type) => type.type.name).join(', ')}
      </Typography>
    </Box>
  );
};

export default PokemonDetails;
