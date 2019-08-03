import React from "react";
import { render } from "react-dom";
import { Container } from "react-bootstrap";
import "./utils/main.sass";

const App = () => (
  <Container>
    <h1>Hello World!</h1>
  </Container>
);

render(<App />, document.getElementById("root"));
