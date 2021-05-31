const path = require("path");
const router = require("express").Router();
const savedNotes = require("../../db/db.json");
const { createNote, validateNote } = require("../../lib/notes");
const notesArray = require("../../db/db.json");

router.get("/notes", (req, res) => {
  res.json(savedNotes);
});

router.post("/notes", (req, res) => {
  req.body.id = savedNotes[savedNotes.length - 1].id + 1;

  if (!validateNote(req.body)) {
    res.status(400).send("The data is not properly formatted.");
  } else {
    const notes = createNote(req.body, notesArray);
    res.json(savedNotes);
  }
});

module.exports = router;
