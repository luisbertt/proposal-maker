import React from "react";
import "./InputGroup.sass";

const InputGroup = ({ name, type }) => (
  <div className="form-group">
    <label>{name}</label>
    <input
      className="form-control"
      name={name.toString().toLowerCase()}
      type={type}
    />
  </div>
);

export default InputGroup;
