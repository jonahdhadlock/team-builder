import React, { useState } from "react";

const Form = (props) => {
  const [note, setNote] = useState({ name: "", email: "", role: "" });

    const [display, setDisplay] = useState(false);
    
  const handleChanges = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
      event.preventDefault();
      setNote({ ...note }, note);
      setDisplay(true);
  };

    return display ? (            
            <div className="complete">
            <p>{note.name}</p>
            <p>{note.email}</p>
            <p>{note.role}</p>
            <button onClick={() => setDisplay(false)}>Add Member</button>
            </div>)
         :
            (<div>
            <h1>Team Tracker</h1>
            <p>Add member details to each sticky note.</p>
            <form onSubmit={submitForm}>
                <div id="name1">
                <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='John Doe'
                        onChange={handleChanges}
                        value={note.name}
                        required
                    />
                </div>
                <div id="email2">
                 <label htmlFor='email'>Email:</label>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        placeholder='name@email.com'
                        onChange={handleChanges}
                        value={note.email}
                        required
                    />
                </div>
                <div id="role3">
                 <label htmlFor='role'>Role:</label>
                    <input
                        type='text'
                        id='role'
                        name='role'
                        placeholder='Web Developer'
                        onChange={handleChanges}
                        value={note.role}
                        required
                    />
                </div>
                <button type="submit" onClick={() => submitForm}>Add Member</button>
            </form>
            </div>)
}

export default Form;