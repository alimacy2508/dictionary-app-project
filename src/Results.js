import React from "react";
import Meaning from "./Meaning.js";
import "./Results.css";

export default function Results(props) {
  function capitalizeString(props) {
    return props.charAt(0).toUpperCase() + props.slice(1);
  }
  if (props.results) {
    return (
      <div>
        <section>
          <h2 className="text-center mt-4 mb-4 Title">
            {capitalizeString(props.results.word)}
          </h2>
          <h4 className="text-center mt-4 Phonetic">
            <strong>Phonetic: </strong> <em>{props.results.phonetic}</em>
          </h4>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          if (index >= 0 && index < 3) {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
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
