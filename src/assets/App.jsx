import { useEffect, useState } from "react";
import "./index.css";

export function App() {
  const [pokemon_name, set_pokemon_name] = useState("");
  const [vault, set_vault] = useState("");

  const handle_submit = (e) => {
    e.preventDefault();
    set_vault(pokemon_name);
  };

  return (
    <>
      <div className="app-container">
        <h1 className="title">Pokemon finder</h1>
        <div className="input-container">
          <form onSubmit={handle_submit}>
            <input
              onBlur={(e) => set_pokemon_name(e.target.value)}
              placeholder="write the name of the pokemon"
              className="input-text"
            />
            <button type="submit" className="button-search">
              Search
            </button>
          </form>
        </div>
        <hr className="line-1" />

        {vault && <Information pokemon={vault} />}
      </div>
    </>
  );
}

function Information({ pokemon }) {
  const [data, set_data] = useState(null);
  const [loading, set_loading] = useState(true);

  useEffect(() => {
    async function fetch_data() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/" + pokemon.toLowerCase()
        );
        if (!response.ok) throw new Error("The pokemon does not exist");
        const result = await response.json();
        setTimeout(() => {
          set_loading(false);
        }, 2000);
        set_data(result);
      } catch (err) {
        console.log(err);
        set_data(null);
      }
    }
    set_loading(true);
    fetch_data();
  }, [pokemon]);

  if (loading)
    return (
      <div className="pokemon-loading">
        <img src="/img/pokeball.png" alt="pokeball" className="logo" />
      </div>
    );

  return (
    <div className="pokemon-info">
      <hr />
      <h1 className="pokemon-name">{data.name}</h1>
      <hr />
      <img
        className="pokemon-image"
        src={data.sprites.front_default}
        alt={data.name}
      />
      <hr />
      <p className="pokemon-type">
        Type: {data.types.map((t) => t.type.name).join(", ")}
      </p>
      <hr />
    </div>
  );
}
