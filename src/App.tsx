import React from "react";
import "./dice";
import Layout from "./layout";

const styles = require("./index.css");

function App() {
  return (
    <Layout>
      <link rel="stylesheet" type="text/css" href="./index.css" />
      <div>
        <h1>Basic Character Ability Scores</h1>
      </div>
      <div className={styles.list}>
        <p id="guts" />
        <button id="button"> Roll </button>
        <script src="./dice.ts" />
        <script src="./index.css" />
      </div>
    </Layout>
  );
}

export default App;
