import React, { forwardRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import "./Message.css";

const Message = forwardRef(({ name, msg }, ref) => {
  console.log(name);
  console.log(msg);
  const isUser = name === msg.userName; // Correct comparison for user check
  console.log(isUser);

  return (
    <div ref={ref} className={`msg ${isUser ? "message_user" : ""}`}>
      <Card className={isUser ? "message_userCard" : "message_guestCard"}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {!isUser && `${msg.userName}:`} {msg.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
