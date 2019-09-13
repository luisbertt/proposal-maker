import React from "react";
import "./SpecItem.sass";

const SpecItem = ({ id, values, options, handleChange, deleteItem }) => (
  <tr className="spec-item">
    <td>
      <select
        className="form-control"
        name="location"
        value={values.location}
        onChange={handleChange(id)}
      >
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </td>
    <td>
      <select
        className="form-control"
        name="manufacturer"
        value={values.manufacturer}
        onChange={handleChange(id)}
      >
        <option>Sherwin</option>
      </select>
    </td>
    <td>
      <input
        className="form-control"
        name="description"
        type="text"
        value={values.description}
        onChange={handleChange(id)}
      />
    </td>
    <td>
      <select
        className="form-control"
        name="sheen"
        value={values.sheen}
        onChange={handleChange(id)}
      >
        <option>Primer</option>
        <option>Satin</option>
        <option>Semi-Gloss</option>
        <option>Flat</option>
        <option>EggShell</option>
        <option>Matt</option>
      </select>
    </td>
    <td>
      <input
        className="form-control color-option"
        name="color"
        type="text"
        placeholder="TBD"
        value={values.color}
        onChange={handleChange(id)}
      />
    </td>
    <td className="text-center">
      <button className="btn delete-btn" onClick={() => deleteItem(id)}>
        <img src="https://img.icons8.com/material-two-tone/24/000000/delete-forever.png" />
      </button>
    </td>
  </tr>
);

export default SpecItem;
