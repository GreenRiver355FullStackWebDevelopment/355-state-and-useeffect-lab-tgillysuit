const PokemonDetails = ({ pokemon }) => {
    return (
        <div className="pokemon-details">
            <h3>{pokemon.name}</h3>
            <img src={pokemon.img} alt={pokemon.name} />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Type: {pokemon.type}</p>
        </div>
    )
}

export default PokemonDetails;