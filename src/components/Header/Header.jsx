import React from "react";
import { Logo } from "../Logo";
import LogoSrc from "../../assets/img/logo-horizontal.png";

const Header = () => (
  <div>
    <Logo src={LogoSrc} height="60px" />
  </div>
);

export default Header;
