var fs = require("fs");

var myOptions = {
  name: "Avian",
  dessert: "cake",
  flavor: "chocolate",
  beverage: "coffee",
};

var data = JSON.stringify(myOptions);

fs.writeFile("myconfig.json", data, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
