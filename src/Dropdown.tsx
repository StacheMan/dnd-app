import React from "react";
import {
  DropdownWrapper,
  StyledSelect,
  StyledOption,
  StyledLabel,
} from "./index";

export function Dropdown(props: any) {
  return (
    <DropdownWrapper action={props.action} onChange={props.onChange}>
      <StyledLabel htmlFor="services">{props.formLabel}</StyledLabel>
      <StyledSelect id="services" name="services">
        {props.children}
      </StyledSelect>
    </DropdownWrapper>
  );
}

export function Option(props: any) {
  return <StyledOption selected={props.selected}>{props.value}</StyledOption>;
}

export {};
