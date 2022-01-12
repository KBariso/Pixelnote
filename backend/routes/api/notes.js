const express = require("express");
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");
const { Note } = require("../../db/models");

const router = express.Router();


//Get all notes
router.get(
  "/",
  requireAuth,
  asyncHandler(async function (req, res) {
    const notes = await Note.findAll();
    return res.json(notes);
  })
);

//Get one note
router.get('/:id(\\d+)', asyncHandler(async function(req, res) {
  const note = await Note.findByPk(req.params.id)
  return res.json(note)
}))



// router.post("/", asyncHandler(async function (req, res) {
//   const {userId, notebookId, title, content} = req.body;
//   const newNote = await Note.create({userId, notebookId, title, content})
//   return res.json(newNote)
// })
// )

module.exports = router;
