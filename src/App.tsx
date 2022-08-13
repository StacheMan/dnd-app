import React from "react";
import "./dice";
import Layout from "./layout";
import Logo from "./assests/updatedlogo.png";
import Rolls from "./assests/d20.png";

const styles = require("./index.css");

function App() {
  return (
    <Layout>
      <div>
        <header>
          <img className={styles.titleImage} alt="Logo" src={Logo}></img>
          <h1>Basic Character Ability Scores</h1>
        </header>
      </div>
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
