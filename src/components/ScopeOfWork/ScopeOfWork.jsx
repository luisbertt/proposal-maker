import React, { useState } from "react";
import "./ScopeOfWork.sass";

const ScopeOfWork = () => {
  const [scope, setScope] = useState("");

  const handleChange = e => {
    const newScope = e.target.value;
    setScope(newScope);
  };

  return (
    <div className="scope-of-work mt-4">
      <h3 className="text-center">Scope Of Work</h3>
      <textarea
        className="form-control"
        id="scopeOfWork"
        rows="3"
        placeholder="Define scope of work"
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default ScopeOfWork;
