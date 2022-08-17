import React from "react";
import tieflingPic from "./assests/tiefling.png";
import halforcPic from "./assests/halforc.png";
import dragonbornPic from "./assests/dragonborn.png";
import halfelfPic from "./assests/halfelf.png";

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

export {};
