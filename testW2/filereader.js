//file reader
const fs = require("fs");
//location codestyle function()
fs.readFile("./ReadFile.txt", "utf8", (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
