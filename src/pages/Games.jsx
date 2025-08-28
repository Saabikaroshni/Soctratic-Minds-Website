import React from "react";
import "../styles/games.css";

const games = [
  { name: "Detective Math", link: "https://homework-ai-flame.vercel.app/" },
  { name: "Math Olympics", link: "https://math-oly.vercel.app/" },
  { name: "Treasure Hunt", link: "https://game-ai-sigma.vercel.app/" },
  { name: "Space Invader", link: "https://game-ai-kulo.vercel.app/" },
  { name: "Time Traveller", link: "https://add-ai-dqks.vercel.app/" },
  { name: "Escape Room", link: "https://escape-math-room.vercel.app/" },
  { name: "Magic Maker", link: "https://magic-maker-coral.vercel.app/" },
];

const Games = () => {
  return (
    <div className="games-container">
      <h1 className="games-title">Socratic Games</h1>
      <div className="games-list">
        {games.map((game, index) => (
          <a
            key={index}
            href={game.link}
            className="game-btn"
          >
            {game.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Games;
