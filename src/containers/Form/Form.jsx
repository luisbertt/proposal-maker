import React from "react";
import { ClientInfo } from "../../components/ClientInfo";
import { ProjectCost } from "../../components/ProjectCost";
import { ScopeOfWork } from "../../components/ScopeOfWork";
import { ProposedPayment } from "../../components/ProposedPayment";
import "./Form.sass";
import Specifications from "../../components/Specifications/Specifications";

const Form = () => (
  <main>
    <div className="col-md-3">
      <ClientInfo />
      <ProjectCost />
    </div>
    <div className="col-md-9">
      <Specifications type="Exterior" options={[]} />
      <Specifications type="Interior" options={[]} />
      <ScopeOfWork />
      <ProposedPayment />
    </div>
  </main>
);

export default Form;
