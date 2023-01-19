import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";
import * as gameService from "./services/gameService";

import Catalogue from "./components/Catalogue/Catalogue";
import CreateGame from "./components/CreateGame/CreateGame";
import EditGame from "./components/EditGame/EditGame";
import GameDetails from "./components/GameDetails/GameDetails";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll().then((result) => {
      console.log(result);
      setGames(result);
    });
  }, []);

  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home games={games} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreateGame />} />
          <Route path="/edit" element={<EditGame />} />
          <Route path="/details" element={<GameDetails />} />
          <Route path="/catalogue" element={<Catalogue games={games} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
