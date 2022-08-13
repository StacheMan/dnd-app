import React from "react";
import "./dice";
import Layout from "./layout";
import Logo from "./assests/updatedlogo.png";
// import Rolls from "./assests/d20.png";
// import * as styles from "./index.css";

const styles = require("./index.css");

function App() {
  return (
    <Layout>
      <header>
        <div className={styles.titleImage}>
          <img alt="Logo" src={Logo} height={150} width={250} />
        </div>
        <div>
          <h1>Basic Character Ability Scores</h1>
        </div>
      </header>
      <div>{/* This area is for the races choice list */}</div>
      <footer>
        <div className={styles.list}>
          <p id="guts" />
          <button id="button"> Roll </button>
          <script src="./dice.ts" />
          <script src="./index.css" />
        </div>
      </footer>
    </Layout>
  );
}

export default App;
