import React from "react";
import { useEffect, useState } from "react";
import { getAllGames } from "./api/getAllGames";

function App() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    getAllGames().then((games) => {
      setGames(games);
    });
  }
  , []);




  return (
    <div>
      
      <ul>
        {games?.map((game) => (
          <li key={game.id}>
            <h2>{game.name}</h2>
            <img src={game.cover?.url} alt={game.name} />
          </li>
        ))}

      </ul>
      
      
      
      
    </div>
  );
}

export default App;
