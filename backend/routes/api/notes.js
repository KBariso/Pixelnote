const express = require("express");
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");
const { Note } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  requireAuth,
  asyncHandler(async function (req, res) {
    const notes = await Note.findAll();
    return res.json(notes);
  })
);


module.exports = router;
