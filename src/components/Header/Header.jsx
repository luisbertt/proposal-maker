import React from "react";
import { Logo } from "../Logo";
import LogoSrc from "../../assets/img/logo-horizontal.png";
import { Button } from "react-bootstrap";
import "./Header.sass";

const Header = () => (
  <header>
    <Logo src={LogoSrc} height="60px" />
    <div className="button-group">
      <Button variant="dark">PREVIEW</Button>
      <Button variant="primary">SAVE</Button>
    </div>
  </header>
);

export default Header;
