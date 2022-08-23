import React from "react";
import "./dice";
import Layout from "./layout";
import Logo from "./assests/updatedlogo.png";

import dwarfPic from "./assests/dwarf.png";
import elfPic from "./assests/elf.png";
import halflingPic from "./assests/halfling.png";
import humanPic from "./assests/human.png";
import dragonbornPic from "./assests/dragonborn.png";
import gnomePic from "./assests/gnome.png";
import halfelfPic from "./assests/halfelf.png";
import halforcPic from "./assests/halforc.png";
import tieflingPic from "./assests/tiefling.png";
// import Rolls from "./assests/d20.png";
import styles from "./index.css";

const App = () => {
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
        <div style={styles.list}>
          <li>
            <button className={styles.selection} id="dwarf">
              <img src={dwarfPic} alt="/" height={100} width={150} />
              Dwarf
            </button>
          </li>
          <li>
            <button className={styles.selection} id="elf">
              <img src={elfPic} alt="/" height={100} width={150} />
              Elf
            </button>
          </li>
          <li>
            <button className={styles.selection} id="halfling">
              <img src={halflingPic} alt="/" height={100} width={200} />
              Halfling
            </button>
          </li>
          <li>
            <button className={styles.selection} id="human">
              <img src={humanPic} alt="/" height={100} width={100} />
              Human
            </button>
          </li>
          <li>
            <button className={styles.selection} id="dragonborn">
              <img src={dragonbornPic} alt="/" height={100} width={200} />
              Dragonborn
            </button>
          </li>
          <li>
            <button className={styles.selection} id="gnome">
              <img src={gnomePic} alt="/" height={100} width={200} />
              Gnome
            </button>
          </li>
          <li>
            <button className={styles.selection} id="half elf">
              <img src={halfelfPic} alt="/" height={100} width={200} />
              Half Elf
            </button>
          </li>
          <li>
            <button className={styles.selection} id="half orc ">
              <img src={halforcPic} alt="/" height={100} width={200} />
              Half Orc
            </button>
          </li>
          <li>
            <button className={styles.selection} id="tiefling">
              <img src={tieflingPic} alt="/" height={100} width={200} />
              Tiefling
            </button>
          </li>
        </div>
      </section>
      <footer>
        <div className={styles.list}>
          <p id="guts" />
          <script src="./dice.ts" />
          <script src="./index.css" />
          <button id="button">Roll</button>
        </div>
      </footer>
    </Layout>
  );
};

export default App;
