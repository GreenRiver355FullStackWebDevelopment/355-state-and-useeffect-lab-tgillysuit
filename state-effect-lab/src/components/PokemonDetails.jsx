const PokemonDetails = ({ pokemon }) => {
  return (
    <div className="pokemon-details">
      <h3>{pokemon.name}</h3>
      <img src={pokemon.url} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Type: {pokemon.types}</p>
    </div>
  );
};

export default PokemonDetails;