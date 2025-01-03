// routes/index.js

const express = require("express");
const router = express.Router();

const controller = require("../controller");

router.get("/", controller.index_get);