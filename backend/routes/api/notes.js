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
router.get(
  "/:id(\\d+)",
  asyncHandler(async function (req, res) {
    const note = await Note.findByPk(req.params.id);
    return res.json(note);
  })
);

// create new note
router.post(
  "/",
  requireAuth,
  asyncHandler(async function (req, res) {
    const { userId, title, content, createdAt, updatedAt } = req.body;
    const newNote = await Note.create({ userId, title, content, createdAt, createdAt, updatedAt });
    return res.json(newNote);
  })
);

//update a note
router.put(
  "/:id(\\d+)/edit",
  requireAuth,
  asyncHandler(async function (req, res) {
    const id = parseInt(req.params.id)
    const { noteId, title, content, updatedAt } = req.body;

    const note = await Note.findByPk(id);
    const updateNote = await note.update({ noteId, title, content, updatedAt });
    return res.json(updateNote);

  })
)



//Delete one note
router.delete("/:id(\\d+)", requireAuth, asyncHandler(async function (req, res) {
  const id = parseInt(req.params.id)
  const note = await Note.findByPk(id);
  const {noteId} = req.body;
  await note.destroy();
  return res.json(noteId);
}));


module.exports = router;
