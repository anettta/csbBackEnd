const fs = require("fs");

fs.readFile("./hello.txt", (err, data) => {
  if (err) {
    console.log("errorrrr");
  }
  console.log(data).toString();
});
