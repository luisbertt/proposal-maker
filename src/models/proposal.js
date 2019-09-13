const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProposalSchema = new Schema({
  client: { type: String, required: true },
  project: { type: String, required: true },
  address: { type: String, required: true },
  date: { type: String, required: true }
});

module.exports = mongoose.model("Proposal", ProposalSchema);
