import React from "react";
import "./dice";
import Layout from "./layout";
// import Rolls from "./assests/d20.png";
import styles from "./index.css";

const App = () => {
  return (
    <Layout>
      <header>
        <div>
          <h1>Basic Dice Roller</h1>
        </div>
      </header>
      <section>
        <span>
          <div className={styles.list}>
            <p id="guts" />
            <script src="./dice.ts" />
            <script src="./index.css" />
            <button id="button">Roll</button>
          </div>
        </span>
      </section>
      <footer></footer>
    </Layout>
  );
};

export default App;
