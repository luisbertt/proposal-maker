import React from "react";
import "./InputGroup.sass";

const InputGroup = ({ name, type, value, handleChange }) => {
  const toCamelCase = str => {
    let s =
      str &&
      str
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
        .join("");
    return s.slice(0, 1).toLowerCase() + s.slice(1);
  };

  return (
    <div className="form-group">
      <label>{name}</label>
      <input
        className="form-control"
        name={toCamelCase(name)}
        type={type}
        value={value}
        onChange={handleChange(toCamelCase(name))}
      />
    </div>
  );
};

export default InputGroup;
