import * as React from "react";
import "./dice";
import Layout from "./layout";
import Logo from "./assests/updatedlogo.png";
import { Dropdown, Option } from "./Dropdown";
// import dwarfPic from "./assests/dwarf.png";
// import Rolls from "./assests/d20.png";
// import * as styles from "./index.css";

const styles = require("./index.css");

function App() {
  const [optionValue, setOptionValue] = React.useState("");
  const handleSelect = (x: any) => {
    console.log(x.target.value);
    setOptionValue(x.target.value);
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
        <Dropdown formLabel="Choose a race" action="/" onChange={handleSelect}>
          <Option />
          <option value="Dwarf">Dwarf</option>
          <option value="Elf">Elf</option>
          <option value="Halfling">Halfling</option>
          <option value="Human">Human</option>
          <option value="Dragonborn">Dragonborn</option>
          <option value="Gnome">Gnome</option>
          <option value="Half Elf">Half Elf</option>
          <option value="Half Orc">Half Orc</option>
          <option value="Tiefling">Tiefling</option>
        </Dropdown>
        <p>You've selected {optionValue}</p>
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
