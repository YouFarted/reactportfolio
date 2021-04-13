const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const Port = process.env.PORT || 3030;

let production = process.argv.findIndex(el => el == "--production") !== -1;

let clientStaticPath = production ? path.join(__dirname, "..", "build") : "";

if(clientStaticPath !== "") {
  app.use(express.static(clientStaticPath));
}

app.get("/testurl", (req, res, next) => {
  return res.end("This is an uninteresting request but shows the server can serve out some content as an url.  That said, the interesting stuff should be the compiled react content");
});

app.listen(Port, () => {
  console.log(`Server Running on port ${Port}`);
});
