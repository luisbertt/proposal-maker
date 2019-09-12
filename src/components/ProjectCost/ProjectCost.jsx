import React, { useState } from "react";
import { InputGroup } from "../InputGroup";
import "./ProjectCost.sass";

const ProjectCost = () => {
  const [cost, setCost] = useState({
    costPerSqft: 0,
    totalArea: 0
  });

  const handleChange = input => e => {
    const newCost = { ...cost, [input]: parseInt(e.target.value) };
    setCost(newCost);
  };

  return (
    <div className="project-cost mt-4">
      <h3>Project Cost</h3>
      <InputGroup
        name="Cost Per Sqft"
        type="number"
        value={cost["cost-per-sqft"]}
        handleChange={handleChange}
      />
      <InputGroup
        name="Total Area"
        type="number"
        value={cost["total-area"]}
        handleChange={handleChange}
      />
      <p>-----------</p>
      <h4>Total</h4>
    </div>
  );
};

export default ProjectCost;
