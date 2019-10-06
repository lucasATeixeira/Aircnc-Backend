const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const controllers = require("./controllers");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/users", controllers.SessionController.store);

routes.post(
  "/spots",
  upload.single("thumbnail"),
  controllers.SpotController.store
);

routes.get("/spots", controllers.SpotController.index);

routes.get("/dashboard", controllers.DashboardController.show);

routes.post("/spots/:spot_id/bookings", controllers.BookingController.store);

module.exports = routes;
