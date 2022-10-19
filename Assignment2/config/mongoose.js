const config = require("./env/development");
const mongoose = require("mongoose");
module.exports = function () {
  const db = mongoose
    .connect(config.db, {
      // useNewUrlParse: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Connection Successful !");
    })
    .catch((err) => {
      console.log(err);
    });
  return db;
};
