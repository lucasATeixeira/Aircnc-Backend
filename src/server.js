const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

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
  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
  }

  routes() {
    this.express.use(
      "/files",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    this.express.use(routes);
  }
}

module.exports = new App().express;
