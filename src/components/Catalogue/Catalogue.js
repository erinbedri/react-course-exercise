import React from "react";
import Game from "./Game";

export default function Catalogue({ games }) {
  return (
    <section id="catalog-page">
      <h1>All Games</h1>

      {games ? (
        games.map((game) => <Game key={game._id} game={game} />)
      ) : (
        <h3 className="no-articles">No articles yet</h3>
      )}
    </section>
  );
}
