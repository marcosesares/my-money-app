const express = require("express");

module.exports = function (server) {
  // Define a base URL for all routes
  const router = express.Router();
  server.use("/api", router);

  // Payment cycle routes
  const BillingCycle = require("../api/billingCycle/billingCycleService");
  BillingCycle.register(router, "/billingCycles");
};
