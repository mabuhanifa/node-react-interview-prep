import React, { useCallback, useEffect, useState } from "react";

export default function CallBack() {
  const [number, setNumber] = useState(1);

  const [dark, setDark] = useState(false);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    padding: "20px",
  };

  // const getItems = () => {
  //   return [number, number + 1, number + 2];
  // };

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);
  return (
    <div style={themeStyle}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={() => setDark((t) => !t)}> Change Theme</button>
      <List getItems={getItems} />
    </div>
  );
}

function List({ getItems }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems());
    console.log(`getting items`);
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
}
