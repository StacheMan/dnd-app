import React from "react";
import "./App.css";
import "./index.css";
import "./dice";
import * as styles from "./index.css";

function App() {
  return (
    <body>
      <link rel="stylesheet" type="text/css" href="./index.css" />
      <div>
        <h1>DND Starting Character Rolls</h1>
        <p id="guts" />
        <button id="button"> Roll </button>
        <script src="./dice.ts" />
        <script src="./index.css" />
      </div>
    </body>
  );
}

export default App;
