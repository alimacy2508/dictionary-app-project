import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning ">
      <h4>{props.meaning.partOfSpeech}</h4>
      <strong>Definition: </strong>
      <p>{props.meaning.definition}</p>

      <strong>Example: </strong>
      <em>{props.meaning.example}</em>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
