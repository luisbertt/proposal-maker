import React from "react";
import { InputGroup } from "../InputGroup";
import "./ProjectCost.sass";

const ProjectCost = () => (
  <div className="project-cost col-6">
    <InputGroup name="costPerSqft" type="text" />
    <InputGroup name="totalArea" type="text" />
    <InputGroup name="total" type="text" />
  </div>
);

export default ProjectCost;
