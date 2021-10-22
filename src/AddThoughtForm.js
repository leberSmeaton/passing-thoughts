import React, { useState } from "react";
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    // update the state with the value of our input field
    setText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime()
    };

    // if the user hasn't typed anything, don't create object
    if (text.length > 0) {
      // pass thought object to addThought, grabbed from props, defined in App.js... <AddThoughtForm addThought={addThought} />
      props.addThought(thought);
      setText(''); // setText('') clearing input field 
    }
  }

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input 
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
