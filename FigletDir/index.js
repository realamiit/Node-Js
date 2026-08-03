const figlet = require("figlet");


figlet("Hyy I am Amit Gupta  !!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});