import React from "react";
import { render } from "react-dom";
import { MainPage } from "./containers/MainPage";
import "./utils/main.sass";

const App = () => <MainPage />;

render(<App />, document.getElementById("root"));
