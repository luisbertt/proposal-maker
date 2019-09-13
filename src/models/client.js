const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClientSchema = new Schema({
  name: { type: String, required: true },
  proposals: []
});

module.exports = mongoose.model("Client", ClientSchema);
