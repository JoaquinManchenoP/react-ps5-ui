import React from "react";
import "./../Header/hero.css";
import { motion } from "framer-motion";

export default function Hero({ image }) {
  return (
    <div className="game-image">
      <img src={image}></img>
    </div>
  );
}
