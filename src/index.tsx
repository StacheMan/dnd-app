import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import styled from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

export const StyledSelect = styled.select`
  align-self: center;
  max-width: 10%;
  height: 100%;
  padding-left: 0.5rem;
  margin-bottom: 1rem;
`;

export const StyledOption = styled.option`
  color: ${(props: any) => (props.selected ? "lightgrey" : "black")};
`;

export const StyledLabel = styled.label`
  text-align: center;
  margin-bottom: 1rem;
`;

//export default Index;
// reportWebVitals();
