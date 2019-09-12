import React, { useState, useEffect } from "react";
import { AddItemButton } from "../AddItemButton";
import { SpecItem } from "../SpecItem";
import "./Specifications.sass";

const Specifications = ({ type, options }) => {
  const [items, setItems] = useState([]);

  const handleChange = index => e => {
    const newItems = items.map((item, i) => {
      if (index !== i) return item;
      return { ...item, [e.target.name]: e.target.value };
    });
    setItems(newItems);
  };

  const addItem = () => {
    const newItems = [
      ...items,
      {
        location: "Body",
        manufacturer: "Sherwin",
        description: "",
        sheen: "Primer",
        color: ""
      }
    ];
    setItems(newItems);
  };

  const deleteItem = id => {
    const newItems = [...items];
    newItems.splice(id, 1);
    setItems(newItems);
  };

  return (
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
          {items.map((item, index) => (
            <SpecItem
              id={index}
              key={index}
              values={items[index]}
              options={options}
              handleChange={handleChange}
              deleteItem={deleteItem}
            />
          ))}
        </tbody>
      </table>
      <AddItemButton onClick={addItem} />
    </div>
  );
};

export default Specifications;
