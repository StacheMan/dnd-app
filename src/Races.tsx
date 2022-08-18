import React from "react";
import { Option } from "./Dropdown";
import tieflingPic from "./assests/tiefling.png";
import halforcPic from "./assests/halforc.png";
import dragonbornPic from "./assests/dragonborn.png";
import halfelfPic from "./assests/halfelf.png";
import dwarfPic from "./assests/dwarf.png";
import humanPic from "./assests/human.png";
import elfPic from "./assests/elf.png";
import gnomePic from "./assests/gnome.png";
import halflingPic from "./assests/halfling.png";

// export default function Races(props: any) {
//   if (props.value === "Dwarf") {
//     return (
//       <img
//         alt="dwarfPic"
//         src={dwarfPic}
//         height={300}
//         width={400}
//         style={{ alignSelf: "center" }}
//       />
//     );
//   }

//   if (props.value === "Elf") {
//     return (
//       <img
//         alt="elfPic"
//         src={elfPic}
//         height={300}
//         width={400}
//         style={{ alignSelf: "center" }}
//       />
//     );
//   }

//   if (props.value === "Human") {
//     return (
//       <img
//         alt="humanPic"
//         src={humanPic}
//         height={300}
//         width={400}
//         style={{ alignSelf: "center" }}
//       />
//     );
//   }

//   return null;
// }

export function Tiefling(props: any) {
  const isClicked = props.isClicked;
  if (isClicked) {
    return <img alt="tieflingPic" src={tieflingPic} height={150} width={200} />;
  } else {
    return null;
  }
}

export function HalfOrc(props: any) {
  const isClicked = props.isClicked;
  if (isClicked) {
    return <img alt="halforcPic" src={halforcPic} height={150} width={200} />;
  } else {
    return null;
  }
}

export function Dragonborn(props: any) {
  const isClicked = props.isClicked;
  if (isClicked) {
    return (
      <img alt="dragonbornPic" src={dragonbornPic} height={150} width={200} />
    );
  } else {
    return null;
  }
}

export function HalfElf(props: any) {
  const isClicked = props.isClicked;
  if (isClicked) {
    return <img alt="halfelfPic" src={halfelfPic} height={150} width={200} />;
  } else {
    return null;
  }
}

export function Dwarf(props: any) {
  const isClicked = props.isClicked;
  if (isClicked) {
    return <img alt="dwarfPic" src={dwarfPic} height={150} width={200} />;
  } else {
    return null;
  }
}

export function Gnome(props: any) {
  const isClicked = props.isClicked;
  if (isClicked) {
    return <img alt="gnomePic" src={gnomePic} height={150} width={200} />;
  } else {
    return null;
  }
}

export function Human(props: any) {
  const isClicked = props.isClicked;
  if (isClicked) {
    return <img alt="humanPic" src={humanPic} height={150} width={200} />;
  } else {
    return null;
  }
}

export function Halfling(props: any) {
  const isClicked = props.isClicked;
  if (isClicked) {
    return <img alt="halflingPic" src={halflingPic} height={150} width={200} />;
  } else {
    return null;
  }
}

export function Elf(props: any) {
  const isClicked = props.isClicked;
  if (isClicked) {
    return <img alt="elfPic" src={elfPic} height={150} width={200} />;
  } else {
    return null;
  }
}

export {};
