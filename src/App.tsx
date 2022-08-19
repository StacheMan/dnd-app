import * as React from "react";
import "./dice";
import Layout from "./layout";
import Logo from "./assests/updatedlogo.png";

// import dwarfPic from "./assests/dwarf.png";
// import Rolls from "./assests/d20.png";
import styles from "./index.css";

// const styles = require("./index.css");

function App() {
  return (
    <Layout>
      <header>
        <div>
          <img alt="Logo" src={Logo} height={150} width={250} />
        </div>
        <div>
          <h1>Basic Character Ability Scores</h1>
        </div>
      </header>
      <section>
        <div className={styles.left}>
          <div className={styles.list}>
            <li className={styles.listItems}>
              <a href="">Dwarf</a>
            </li>
            <li className={styles.listItems}>
              <a href="">Elf</a>
            </li>
            <li className={styles.listItems}>
              <a href="">Halfling</a>
            </li>
            <li className={styles.listItems}>
              <a href="">Human</a>
            </li>
            <li className={styles.listItems}>
              <a href="">Dragonborn</a>
            </li>
            <li className={styles.listItems}>
              <a href="">Gnome</a>
            </li>
            <li className={styles.listItems}>
              <a href="">Half Elf</a>
            </li>
            <li className={styles.listItems}>
              <a href="">Half Orc</a>
            </li>
            <li className={styles.listItems}>
              <a href="">Tiefling</a>
            </li>
          </div>
        </div>
        <div className={styles.right}></div>
      </section>
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
