import React, { useState } from "react";
import ReactDOM from "react-dom";
import Form from './Form';
import Populate from './Populate';

function App() {
  const [notes, setNotes] = useState("");

  const addNewNote = (note) => {
    const newNote = {
      name: note.name,
      email: note.email,
      role: note.role
    };

    setNotes([newNote, ...notes]);
  };

  return (
    <div className="App">
      <Form addNewNote={addNewNote} />
      <Populate id={notes.id}/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;