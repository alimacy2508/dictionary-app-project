import React from "react";
import Synonyms from "./Synonyms.js";
import Example from "./Example.js";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning ">
      <h4>{props.meaning.partOfSpeech}</h4>
      <strong>Definition: </strong>
      <div className="definition">
        <p>{props.meaning.definition}</p>
      </div>

      <em>
        <div className="Example">
          <Example example={props.meaning.example} />
        </div>
      </em>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
