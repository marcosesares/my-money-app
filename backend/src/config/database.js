const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
module.exports = mongoose.connect("mongodb://localhost/mymoney", {
  useMongoClient: true,
  useNewUrlParser: true,
});

mongoose.Error.messages.general.required =
  "The attribute '{PATH}' is required.";
mongoose.Error.messages.Number.min = "'{VALUE}' cannot be lower than '{MIN}'";
mongoose.Error.messages.Number.max = "'{VALUE}' cannot be higher than '{MAX}'";
mongoose.Error.messages.String.enum =
  "'{VALUE}' is not a valid argument for attribute '{PATH}', valid arguments are ['PAGO', 'PENDENTE', 'AGENDADO']";
