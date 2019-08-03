import React from "react";
import { Logo } from "../Logo";
import LogoSrc from "../../assets/img/logo-horizontal.png";
import "./Header.sass";

const Header = () => (
  <header>
    <Logo src={LogoSrc} height="60px" />
  </header>
);

export default Header;
