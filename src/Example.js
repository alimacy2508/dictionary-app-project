import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div>
        {" "}
        <strong>Example: </strong>
        <p>{props.example}</p>
      </div>
    );
  } else {
    return null;
  }
}
