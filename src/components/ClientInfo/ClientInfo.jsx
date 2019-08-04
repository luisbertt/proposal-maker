import React from "react";
import { InputGroup } from "../InputGroup";
import "./ClientInfo.sass";

const ClientInfo = () => (
  <div className="client-info col-6">
    <InputGroup name="Client" type="text" />
    <InputGroup name="Project" type="text" />
    <InputGroup name="Address" type="text" />
    <InputGroup name="Date" type="date" />
  </div>
);

export default ClientInfo;
