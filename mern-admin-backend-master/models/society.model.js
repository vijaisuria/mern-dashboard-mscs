const mongoose = require("mongoose");

const societySchema = new mongoose.Schema({
  societyName: { type: String, required: true },
  societyAddress: { type: String, required: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  dateOfRegistration: { type: Date, required: true },
  areaOfOperation: { type: String, required: true },
  sectorType: { type: String, required: true },
});

const Society = mongoose.model("Society", societySchema);

module.exports = Society;
0;
