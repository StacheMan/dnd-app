import React from "react";
import "./App.css";
import "./index.css";
import "./dice";

function App() {
  return (
    <div className="App">
      <h1>DND Starting Character Rolls</h1>
      <link rel="stylesheet" href="index.css" />
      <body>
        <p id="guts"></p>
        <button id="button"> Roll</button>
        <script src="dice.ts" />
        <script src="index.css" />
      </body>
    </div>
  );
}

export default App;
