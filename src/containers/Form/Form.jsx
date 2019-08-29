import React from "react";
import { ClientInfo } from "../../components/ClientInfo";
import { ProjectCost } from "../../components/ProjectCost";
import "./Form.sass";

const Form = () => (
  <main>
    <ClientInfo />
    <ProjectCost />
  </main>
);

export default Form;
