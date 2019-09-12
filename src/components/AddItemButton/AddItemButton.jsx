import React from "react";
import "./AddItemButton.sass";

const AddItemButton = ({ onClick }) => (
  <button className="button btn btn-dark" onClick={onClick}>
    Add Item
  </button>
);

export default AddItemButton;
