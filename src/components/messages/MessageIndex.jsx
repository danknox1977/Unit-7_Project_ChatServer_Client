import React, { useEffect, useState } from "react";
import MessageDisplay from "./MessageDisplay";

function MessageIndex(props) {
  useEffect(() => {
    if (props.token || props.selectedRoom) {
      props.fetchMessages();
    }
  }, [props.token || props.selectedRoom])

  return (
    <>
      <MessageDisplay
        token={props.token}
        fetchMessages={props.fetchMessages}
        messages={props.messages.results}
        rooms={props.rooms}
        selectedRoom={props.selectedRoom}
        setSelectedRoom={props.setSelectedRoom}
      />
    </>
  );
}

export default MessageIndex;
