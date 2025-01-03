// controller.js

const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const passport = require("./auth");

const logger = require("./logger");
const MessageSchema = require("./models/messages");

exports.index_get = asyncHandler(async function (req, res, next) {
  logger.info(`${req.method} ${req.originalUrl} ${res.statusCode}}`);

  const messages = await MessageSchema.find({ deleted: false })
    .sort({ created_at: -1 })
    .populate("user")
    .exec();

  res.render("index", {
    title: "Members Only",
    user: res.locals.currentUser,
    isUserLoggedIn: !!res.locals.currentUser,
    messages,
  });
});