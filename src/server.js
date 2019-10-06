const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

class App {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    mongoose.connect("mongodb://localhost:27017/aircnc", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
  middlewares() {}

  routes() {
    this.express.use(routes);
  }
}

module.exports = new App().express;
