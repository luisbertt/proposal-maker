import React, { useState } from "react";
import { InputGroup } from "../InputGroup";
import "./ClientInfo.sass";

const ClientInfo = () => {
  const [client, setClient] = useState({
    client: "",
    project: "",
    address: "",
    date: ""
  });

  const handleChange = input => e => {
    const newClient = { ...client, [input]: e.target.value };
    setClient(newClient);
  };

  return (
    <div className="client-info">
      <h3>Project Info</h3>
      <InputGroup
        name="Client"
        type="text"
        value={client.name}
        handleChange={handleChange}
      />
      <InputGroup
        name="Project"
        type="text"
        value={client.project}
        handleChange={handleChange}
      />
      <InputGroup
        name="Address"
        type="text"
        value={client.address}
        handleChange={handleChange}
      />
      <InputGroup
        name="Date"
        type="date"
        value={client.date}
        handleChange={handleChange}
      />
    </div>
  );
};

export default ClientInfo;
