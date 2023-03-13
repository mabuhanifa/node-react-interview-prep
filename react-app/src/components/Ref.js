import React, { useRef } from "react";

export default function Ref() {
  const refs = useRef();
  console.log(refs);

  function change() {
    const par = refs.current;
    par.className = "para";
  }

  return (
    <div>
      <span ref={refs} className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        nemo minima laboriosam aut sint voluptatum itaque quam blanditiis
        veniam? Neque iusto minima hic, commodi ipsam labore eos libero officia
        rerum?
      </span>
      <button onClick={change}>Change Color</button>
    </div>
  );
}
