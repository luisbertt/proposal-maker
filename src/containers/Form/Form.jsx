import React from "react";
import { ClientInfo } from "../../components/ClientInfo";
import { ProjectCost } from "../../components/ProjectCost";
import { ProposedPayment } from "../../components/ProposedPayment";
import { ScopeOfWork } from "../../components/ScopeOfWork";
import { Specifications } from "../../components/Specifications";
import { exteriorOptions, interiorOptions } from "../../utils/options";
import "./Form.sass";

const Form = () => (
  <main>
    <div className="col-md-3">
      <ClientInfo />
      <ProjectCost />
    </div>
    <div className="col-md-9">
      <Specifications type="Exterior" options={exteriorOptions} />
      <Specifications type="Interior" options={interiorOptions} />
      <ScopeOfWork />
      <ProposedPayment />
    </div>
  </main>
);

export default Form;
