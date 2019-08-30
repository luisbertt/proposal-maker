import React from "react";
import { InputGroup } from "../InputGroup";
import "./ProjectCost.sass";

const ProjectCost = () => (
  <div className="project-cost mt-4">
    <h3>Project Cost</h3>
    <InputGroup name="Cost/Sqft" type="number" />
    <InputGroup name="Total Area" type="number" />
    <p>-----------</p>
    <h4>Total</h4>
  </div>
);

export default ProjectCost;
