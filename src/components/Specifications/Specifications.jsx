import React from "react";
import { SpecItem } from "../SpecItem";
import "./Specifications.sass";

const Specifications = ({ type, options }) => (
  <div className="specifications mb-4">
    <h3 className="text-center">{type} Spec Items</h3>
    <table className="table table-borderless">
      <thead>
        <tr>
          <th>Location</th>
          <th>Manufacturer</th>
          <th>Description</th>
          <th>Sheen</th>
          <th>Color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <SpecItem />
      </tbody>
    </table>
  </div>
);

export default Specifications;
