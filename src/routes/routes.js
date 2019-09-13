const express = require("express");
const router = express.Router();

const Proposal = require("../models/proposal");

router.get("/", (req, res) => {
  res.json({
    status: "Working"
  });
});

module.exports = router;
