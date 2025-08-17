import { useEffect, useState } from "react";
import "./index.css"

export function App() {
  const [pokemon_name, set_pokemon_name] = useState("");
  const [vault, set_vault] = useState("");

  const handle_submit = (e) => {
    e.preventDefault();
    set_vault(pokemon_name);
  };

  return (
    <>
      <h1>Pokemon finder</h1>
      <form onSubmit={handle_submit}>
        <input
          value={pokemon_name}
          onBlur={(e) => set_pokemon_name(e.target.value)}
          placeholder="write the name of the pokemon"
        />
        <button type="submit">Search</button>
      </form>

      {vault && <Information pokemon={vault} />}
    </>
  );
}

function Information({ pokemon }) {
  const [data, set_data] = useState(null);

  useEffect(() => {
    async function fetch_data() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/" + pokemon.toLowerCase()
        );
        if (!response.ok) throw new Error("The pokemon does not exist");
        const result = await response.json();
        set_data(result);
      } catch (err) {
        console.log(err);
        set_data(null);
      }
    }
    fetch_data();
  }, [pokemon]);

  if (!data) return <p>...</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.sprites.front_default} alt={data.name} />
      <p>Tipo: {data.types.map((t) => t.type.name).join(", ")}</p>
    </div>
  );
}
