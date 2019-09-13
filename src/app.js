import React from "react";
import { render } from "react-dom";
import { Proposal } from "./app/containers/Proposal";

const App = () => <Proposal />;

render(<App />, document.getElementById("root"));
