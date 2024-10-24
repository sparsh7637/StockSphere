const { model } = require("mongoose");
const { HoldingSchema } = require("../schemas/HoldingsSchema");

const HoldingsModel = new model("holding", HoldingSchema); // No 'new' keyword here

module.exports = { HoldingsModel };
