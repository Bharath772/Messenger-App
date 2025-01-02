import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { FormControl, IconButton, Input, InputLabel } from "@mui/material";
import Message from "./Message";
import "./App.css";
import firebase from "firebase/compat/app";
import db from "./firebase";
import { motion } from "framer-motion"; // Importing Framer Motion
import SendIcon from "@mui/icons-material/Send";

function App() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessage(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    const enteredName = prompt("Please enter your name");
    setName(enteredName || "Anonymous"); // Fallback to "Anonymous" if no name is entered
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      userName: name,
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="App">
      <img
        src="data:image/jpeg;base64,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"
        alt="image"
        height="100px"
      />
      <h1>Messenger</h1>
      <p>Welcome {name}</p>
      <form className="app_form">
        <FormControl className="app_formControl">
          <Input
            className="app_input"
            placeholder="Enter the message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            className="app_iconButton"
            disabled={!input}
            type="submit"
            variant="contained"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {message.map(({ id, message: singlemsg }) => (
          <motion.div key={id} layout>
            <Message name={name} msg={singlemsg} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default App;
