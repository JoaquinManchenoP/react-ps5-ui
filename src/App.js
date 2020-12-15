import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Header/Header.component";
import Ps5 from "./components/Header/ps5.component";
import Store, { Context } from "./Store";
import Grid from "@material-ui/core/Grid";
import { motion, transform } from "framer-motion";
import StartingComponent from "./components/StartingComponent";

function App() {
  return (
    <div className="app">
      <Store>
        <Grid item xs={12}>
          <StartingComponent />
        </Grid>
      </Store>
    </div>
  );
}

export default App;
