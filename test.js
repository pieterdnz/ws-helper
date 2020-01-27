var fs = require("fs");

var path = "../";

fs.readdir(path, function(err, items) {
  console.log(items);

  for (var i = 0; i < items.length; i++) {
    console.log(items[i]);
  }
  console.log("OEPS");
});

var filePath = "../delete.txt";
fs.unlinkSync(filePath);
