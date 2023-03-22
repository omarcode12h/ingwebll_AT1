"use strict";

const app = require("./app");
const { mongoConn } = require("./dataBase/configuracion");

const conn = mongoConn();
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`arrancó por puerto: ${app.get("port")}`);
});
