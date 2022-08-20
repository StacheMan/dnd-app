import React, { useState } from "react";
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
  const [selectedOption, setSelectedOption] = useState<String>();

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };
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
        <div style={styles.container}>
          <select onChange={selectChange} style={styles.select}>
            <option selected disabled>
              Choose a race
            </option>
            <option value={dwarfPic}>Dwarf</option>
            <option value={elfPic}>Elf</option>
            <option value={halflingPic}>Halfling</option>
            <option value={humanPic}>Human</option>
            <option value={dragonbornPic}>Dragonborn</option>
            <option value={gnomePic}>Gnome</option>
            <option value={halfelfPic}>Half Elf</option>
            <option value={halforcPic}>Half Orc</option>
            <option value={tieflingPic}>Tiefling</option>
          </select>
          {selectedOption && <h2 style={styles.result}>{selectedOption}</h2>}
        </div>
      </section>
      <footer>
        <div className={styles.list}>
          <p id="guts" />
          <button className={styles.diceButton} id="diceButton">
            Roll
          </button>
          <script src="./dice.ts" />
          <script src="./index.css" />
        </div>
      </footer>
    </Layout>
  );
};

export default App;
