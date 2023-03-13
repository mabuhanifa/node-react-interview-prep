import React, { useEffect, useMemo, useState } from "react";

export default function Memo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNum = useMemo(() => makeDouble(number), [number]);
  //   const doubleNum =  makeDouble(number);

//   const themeStyle = {
//     backgroundColor: dark ? "black" : "white",
//     color: dark ? "white" : "black",
//   };

    const themeStyle = useMemo(() => {
      return {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
      };
    }, [dark]);

  useEffect(() => {
    console.log(`theme changed`);
  }, [themeStyle]);
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={() => setDark((t) => !t)}> Change Theme</button>
      <div style={themeStyle}>{doubleNum}</div>
    </>
  );
}

function makeDouble(num) {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}
