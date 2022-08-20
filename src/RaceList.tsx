import React from "react";
import styles from "./index.css";
import dwarfPic from "./assests/dwarf.png";
import elfPic from "./assests/elf.png";
import halflingPic from "./assests/halfling.png";
import humanPic from "./assests/human.png";
import dragonbornPic from "./assests/dragonborn.png";
import gnomePic from "./assests/gnome.png";
import halfelfPic from "./assests/halfelf.png";
import halforcPic from "./assests/halforc.png";
import tieflingPic from "./assests/tiefling.png";

function displayImage(imageVisable: any) {
  if (imageVisable === "dwarf") {
    <img alt="dwarfPic" src={dwarfPic} />;
  } else if (imageVisable === "elf") {
    <img alt="elfPic" src={elfPic} />;
  } else if (imageVisable === "halfling") {
    <img alt="halflingPic" src={halflingPic} />;
  } else if (imageVisable === "human") {
    <img alt="humanPic" src={humanPic} />;
  } else if (imageVisable === "dragonborn") {
    <img alt="dragonbornPic" src={dragonbornPic} />;
  } else if (imageVisable === "gnome") {
    <img alt="gnomePic" src={gnomePic} />;
  } else if (imageVisable === "half elf") {
    <img alt="halfelfPic" src={halfelfPic} />;
  } else if (imageVisable === "half orc") {
    <img alt="halforcPic" src={halforcPic} />;
  } else if (imageVisable === "tiefling") {
    <img alt="tieflingPic" src={tieflingPic} />;
  } else {
    return null;
  }
}

export default function RaceList(props: any) {
  return (
    <div>
      <li>
        <button
          className={styles.imageButton}
          id="dwarf"
          onClick={displayImage}
        >
          Dwarf
        </button>
      </li>
      <li>
        <button className={styles.imageButton} id="elf" onClick={displayImage}>
          Elf
        </button>
      </li>
      <li>
        <button
          className={styles.imageButton}
          id="halfling"
          onClick={displayImage}
        >
          Halfling
        </button>
      </li>
      <li>
        <button
          className={styles.imageButton}
          id="human"
          onClick={displayImage}
        >
          Human
        </button>
      </li>
      <li>
        <button
          className={styles.imageButton}
          id="dragonborn"
          onClick={displayImage}
        >
          Dragonborn
        </button>
      </li>
      <li>
        <button
          className={styles.imageButton}
          id="gnome"
          onClick={displayImage}
        >
          Gnome
        </button>
      </li>
      <li>
        <button
          className={styles.imageButton}
          id="half elf"
          onClick={displayImage}
        >
          Half Elf
        </button>
      </li>
      <li>
        <button
          className={styles.imageButton}
          id="half orc "
          onClick={displayImage}
        >
          Half Orc
        </button>
      </li>
      <li>
        <button
          className={styles.imageButton}
          id="tiefling"
          onClick={displayImage}
        >
          Tiefling
        </button>
      </li>
    </div>
  );
}
