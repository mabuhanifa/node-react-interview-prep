import React, { useRef } from "react";

export default function Ref() {
  const inputRef = useRef();
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}
