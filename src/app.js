import React from "react";
import { render } from "react-dom";
import { Container } from "react-bootstrap";
import "./utils/main.sass";
import { MainPage } from "./containers/MainPage";

const App = () => (
  <Container>
    <MainPage />
  </Container>
);

render(<App />, document.getElementById("root"));
