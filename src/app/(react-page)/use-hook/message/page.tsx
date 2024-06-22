"use client";

import { useState } from "react";
import { MessageContainer } from "@/components/message-container";

// 返回 resolve
// function fetchMessage() {
//   return new Promise((resolve, reject) => setTimeout(resolve, 1000));
// }

// 返回 reject
// function fetchMessage() {
//     return new Promise((resolve, reject) => setTimeout(reject, 1000));
// }

// Promise.catch
function fetchMessage() {
    return new Promise((resolve, reject) => {
        reject();
    }).catch(() => {
        return "no new message found.";
    });
}

export default function App() {
  const [messagePromise, setMessagePromise] = useState(null);
  const [show, setShow] = useState(false);
  function download() {
    setMessagePromise(fetchMessage());
    setShow(true);
  }

  if (show) {
    return <MessageContainer messagePromise={messagePromise} />;
  } else {
    return <button onClick={download}>Download message</button>;
  }
}
