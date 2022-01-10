const express = require('express')
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const {Notebook} = require('../../db/models');

const router = express.Router()


router.get('/', requireAuth, asyncHandler(async function (req, res) {
    const notebooks = await Notebook.findAll()
    return res.json(notebooks)
}))




module.exports = router;
