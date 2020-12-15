import React, { useContext } from "react";
import "./gameCard.css";
import { motion } from "framer-motion";
import { Context } from "../../Store";

export default function GameCard({ game }) {
  const [state, setState] = useContext(Context);

  const defaultImage =
    "https://gmedia.playstation.com/is/image/SIEPDC/astro-bot-rescue-mission-wallpaper-05-en-us-06jul20?$native--t$";

  const button = {
    rest: { scale: 1 },
    hover: { scale: 1.2 },
    pressed: { scale: 0.9 },
  };

  const Hover = () => {
    setState(game);
  };

  const leave = () => {
    setState(
      "https://gmedia.playstation.com/is/image/SIEPDC/astro-bot-rescue-mission-wallpaper-05-en-us-06jul20?$native--t$"
    );
    console.log("leave");
  };

  return (
    <div className="container" onMouseEnter={Hover} onMouseLeave={leave}>
      <motion.div
        className="gameCard"
        initial={button.rest}
        whileHover={button.hover}
        whileTap={button.pressed}
      >
        <img src={game.image}></img>
      </motion.div>
    </div>
  );
}
