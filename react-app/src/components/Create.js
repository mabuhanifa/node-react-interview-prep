import React from "react";

export const List = () => {
  return <div>list</div>;
};
export const Create = ({name}) =>
  React.createElement("div", { className: "create" }, `Hello ${name}`);
