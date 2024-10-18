import React from "react";
import Meaning from "./Meaning.js";

export default function Results(props) {
  if (props.results) {
    return (
      <div>
        <h2 className="text-center mt-4 mb-4">{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          if (index >= 0 && index < 3) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
