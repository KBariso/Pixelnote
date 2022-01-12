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
    const { userId, notebookId, title, content, createdAt, updatedAt } = req.body;
    const newNote = await Note.create({ userId, notebookId, title, content, createdAt, updatedAt });
    return res.json(newNote);
  })
);

// //update a note
// router.put(
//   "/:id(\\d+)/edit",
//   asyncHandler(async function (req, res) {
//     const { userId, notebookId, title, content } = req.body;
//     const updateNote = await Note.update({ userId, notebookId, title, content });
//     return res.json(updateNote);
//   })
// )


// //Delete one note
// router.delete("/:id", asyncHandler(async function (req, res) {
//   const noteId = await ItemsRepository.delete(req.params.id);
//   return res.json({ noteId });
// }));


module.exports = router;
