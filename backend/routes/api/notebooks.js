const express = require('express')
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");
const {Notebook} = require('../../db/models');

const router = express.Router()


router.get('/', requireAuth, asyncHandler(async function (req, res) {
    const notebooks = await Notebook.findAll();
    return res.json(notebooks)
}))

router.get('/:id(\\d+)', requireAuth, asyncHandler(async function(req, res) {
    const notebook = await Notebook.findByPk(req.params.id)
    return res.json(notebook)
}))

router.post(
    "/",
    requireAuth,
    asyncHandler(async function (req, res) {
      const { userId, title, createdAt, updatedAt } = req.body;
      const newNotebook = await Notebook.create({ userId, title, createdAt, createdAt, updatedAt });
      return res.json(newNotebook);
    })
  );



module.exports = router;
