import React from "react";
import "./ProposedPayment.sass";

const ProposedPayment = () => (
  <div className="proposed-payment mt-4">
    <h3 className="text-center">Proposed Payment</h3>
    <p className="text-center">
      <b>OWNER</b> agress to pay <b>CONTRACTOR</b> a proposed total cash price
      of <b>$0.00</b>. <b>OWNER</b> represents that this agreement is a cash
      transaction where no financing is contemplated and <b>CONTRACTOR</b> acts
      in reliance on said representation.
    </p>
    <p className="text-center">The payment schedule is as follows:</p>
    <input
      className="form-control text-center"
      name="proposedPayment"
      type="text"
    />
  </div>
);

export default ProposedPayment;
