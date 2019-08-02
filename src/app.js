import React from "react";
import ReactDOM from "react-dom";
import { Container } from "react-bootstrap";
import "./utils/main.sass";

const App = () => (
  <Container>
    <h1>Hello World!</h1>
  </Container>
);

ReactDOM.render(<App />, document.getElementById("root"));
