import { useEffect, useState } from "react"

//const KEY = "1234"
//const q = "coderhouse"

//const url = `https//api.giphy.com/v1/gifs/search?api_key${KEY}&q=${q}&limit=10`

const urlPokemon = `https//pokeapi.co/api/v2/pokemon/1` //se puede poner 1 o nombre de el pokemon


export const PokeApi = () => {

    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(1) //num define pokemon

    const handleSiguiente = () => {
        setId(id + 1)
    }

    const handleAnterior = () => {
        id > 1 && setId(id - 1) //para que no haga un -1 cuando resta
    }

    useEffect(() => {
        fetch(`https//pokeapi.co/api/v2/pokemon/${id}`) //se puede poner 1 o nombre de el pokemon
            .then((resp) => resp.json())
            .then((data) => {
                setPokemon(data);
            }, [id])
    })


    return (
        <div className="container my-5">
            <h2>Poke Api</h2>
            <hr />

            {pokemon &&
                <div>
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            }
            <hr />
            <button onClick={handleAnterior} className="btn btn-outline-primary mx-3" disabled={id === 1}>Anterior</button>
            <button onClick={handleSiguiente} className="btn btn-primary">Siguiente</button>
        </div>
    )
}
