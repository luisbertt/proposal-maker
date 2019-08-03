import React from "react";
import { render } from "react-dom";
import { MainPage } from "./containers/MainPage";

const App = () => <MainPage />;

render(<App />, document.getElementById("root"));
