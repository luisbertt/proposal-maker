import React from "react";
import "./SpecItem.sass";

const SpecItem = () => (
  <tr className="spec-item">
    <td className="text-center">1</td>
    <td>
      <select className="form-control" name="location">
        <option>Body</option>
      </select>
    </td>
    <td>
      <select className="form-control" name="manufacturer">
        <option>Sherwin</option>
      </select>
    </td>
    <td>
      <input className="form-control" name="description" type="text" />
    </td>
    <td>
      <select className="form-control" name="sheen">
        <option>Primer</option>
      </select>
    </td>
    <td>
      <input
        className="form-control color-option"
        name="color"
        type="text"
        placeholder="TBD"
      />
    </td>
    <td className="text-center">
      <button className="btn delete-btn">
        <img src="https://img.icons8.com/material-two-tone/24/000000/delete-forever.png" />
      </button>
    </td>
  </tr>
);

export default SpecItem;
