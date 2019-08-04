import React from "react";
import "./InputGroup.sass";

const InputGroup = ({ name, type }) => (
  <div className="form-group">
    <label>{name}</label>
    <input className="form-control form-control-sm" type={type} />
  </div>
);

export default InputGroup;
