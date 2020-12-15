import React, { useContext } from "react";
import Header from "./Header.component";
import styled from "styled-components";
import { Context } from "../../Store";
import { AnimatePresence, motion } from "framer-motion";
import "./ps5.css";
import Hero from "./Hero.js";

export default function Ps5() {
  const [state, setState] = useContext(Context);

  const AppStyles = styled.div`
    background-image: url("${state.poster}");
    height: 100vh;
    width: 100vw;
    background-size: 100% 100%;
  `;

  return (
    <>
      <div>
        <Header />
      </div>
    </>
  );
}
