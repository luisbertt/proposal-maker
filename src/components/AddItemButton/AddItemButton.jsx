import React from "react";
import "./AddItemButton.sass";

const AddItemButton = ({ onClick }) => (
  <button className="btn btn-dark" onClick={onClick}>
    Add Item
  </button>
);

export default AddItemButton;
