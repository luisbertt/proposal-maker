import React from "react";
import { ClientInfo } from "../../components/ClientInfo";
import { ProjectCost } from "../../components/ProjectCost";
import { ScopeOfWork } from "../../components/ScopeOfWork";
import "./Form.sass";

const Form = () => (
  <main>
    <div className="col-md-3">
      <ClientInfo />
      <ProjectCost />
    </div>
    <div className="col-md-9">
      <ScopeOfWork />
    </div>
  </main>
);

export default Form;
