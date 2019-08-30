import React from "react";
import "./ScopeOfWork.sass";

const ScopeOfWork = () => (
  <div className="scope-of-work mt-4">
    <h3 className="text-center">Scope Of Work</h3>
    <textarea
      className="form-control"
      id="scopeOfWork"
      rows="3"
      placeholder="Define scope of work"
    ></textarea>
  </div>
);

export default ScopeOfWork;
