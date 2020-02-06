var fs = require("fs");
var path = require("path");
var dirit = "../";

fs.readdir(dirit, function(err, items) {
  // console.log(items);
  // for (var i = 0; i < items.length; i++) {
  //   console.log(items[i]);
  // }
  //console.log("\x1b[36m%s\x1b[0m", "Helper lib installed");
});
// var file = "../../../../delete.txt";
// fs.exists(file, function(exists) {
//   var filePath = path.resolve(__dirname, file);
//   if (exists) fs.unlinkSync(filePath);
//   else console.log("not found", __dirname, file);
// });
console.log("\x1b[36m%s\x1b[0m", "Helper lib installed");
