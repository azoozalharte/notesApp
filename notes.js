const fs = require('fs');

const getNotes = () => {
  return 'Your notes...';
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.filter(note => {
    return note.title === title;
  });

  if (duplicateNote.length === 0) {
    notes.push({
      title,
      body
    });

    saveNotes(notes);
  } else {
    console.log('Duplicate note');
  }
};

const removeNote = title => {
  const removeN = loadNotes();

  removeN.pop({
    title
  });
  saveNotes(removeN);
};

const saveNotes = notes => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJson);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNotes,
  removeNote
};
