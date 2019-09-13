import React from "react";
import { Logo } from "../Logo";
import LogoSrc from "../../../public/assets/img/logo-horizontal.png";
import "./CompanyInfo.sass";

const CompanyInfo = () => (
  <div className="heading">
    <div className="company-info">
      <b>SW USA Franco Painting</b>
      <br />
      Julio Franco <br />
      690 3rd St SW <br />
      Naples, FL 34117
    </div>
    <Logo src={LogoSrc} width="200px" height="100px" />
  </div>
);

export default CompanyInfo;
