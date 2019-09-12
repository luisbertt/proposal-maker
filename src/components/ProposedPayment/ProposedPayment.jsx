import React, { useState } from "react";
import "./ProposedPayment.sass";

const ProposedPayment = () => {
  const [payment, setPayment] = useState("");

  const handleChange = e => {
    const newPayment = e.target.value;
    setPayment(newPayment);
  };

  return (
    <div className="proposed-payment mt-4">
      <h3 className="text-center">Proposed Payment</h3>
      <p className="text-center">
        <b>OWNER</b> agress to pay <b>CONTRACTOR</b> a proposed total cash price
        of <b>$0.00</b>. <b>OWNER</b> represents that this agreement is a cash
        transaction where no financing is contemplated and <b>CONTRACTOR</b>{" "}
        acts in reliance on said representation.
      </p>
      <p className="text-center">The payment schedule is as follows:</p>
      <input
        className="form-control text-center"
        name="proposedPayment"
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

export default ProposedPayment;
