import { useState } from "react";

export function App() {
  const [state, set_state] = useState(false);
  const [value, set_value] = useState("");
  return (
    <>
      <h1>Buscador de pokemons</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <button onClick={() => set_state(show_information(value))}>
          Buscar
        </button>
      </form>
      <input onBlur={(e) => set_value((value) => (value = e.target.value))} />
      {state && search_pokemon(value)}
    </>
  );
}

function search_pokemon(pokemon_name) {
  pokemon_name = "pokemon/" + pokemon_name;
  return (
    <>
      <h1>{pokemon_name}</h1>
    </>
  );
}

function show_information(pokemon_name) {
  if (pokemon_name.length === 0) {
    return false;
  } else {
    return true;
  }
}
