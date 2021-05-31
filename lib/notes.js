const fs = require("fs");
const path = require("path");

function createNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArray, null, 2)
  );
  return note;
}

function validateNote(body) {
  if (!body.title || typeof body.title !== "string") {
    return false;
  }
  if (!body.text || typeof body.text !== "string") {
    return false;
  }

  return true;
}

module.exports = { createNote, validateNote };
