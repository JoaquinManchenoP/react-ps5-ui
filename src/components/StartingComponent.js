import React, { useContext } from "react";
import Ps5 from "./../components/Header/ps5.component";
import styled from "styled-components";
import { Context } from "./../Store";
import { motion, AnimatePresence } from "framer-motion";

export default function StartingComponent() {
  const [state, setState] = useContext(Context);
  const Styles = styled.div`
    background-image: url("${state.poster}");
    height: 100vh;
    width: 100vw;
    background-size: 100% 100%;
  `;

  return (
    <Styles>
      <Ps5 />
    </Styles>
  );
}
