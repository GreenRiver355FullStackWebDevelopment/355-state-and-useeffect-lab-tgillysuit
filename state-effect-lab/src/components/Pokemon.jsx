import { useState } from 'react'
import PokemonDetails from './PokemonDetails';

const Pokemon = ({ pokes }) => {
const [pokemon, setPokemon] = useState([0, 20]);
const onPokeClick = async (id) => {
    const res = await fetch(`https://pokeapi.co/api/v2/aibility/${id}`);    // TODO: add fetch address from pokemon api here
    const data = await res.json();
    setPokemon(data);
}

    return (
        <div className="pokemon">
            {pokes.map((poke, index) => {
                <div
                    key={index}
                    className='poke'
                    onClick={() => onPokeClick(poke.id)}
                >
                {poke.name}
                </div>
            })}
            {pokemon && <PokemonDetails pokemon={pokemon}/>}
        </div>
    )
}

export default Pokemon;