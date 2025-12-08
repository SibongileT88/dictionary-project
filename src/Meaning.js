import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Meaning.css";
export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3 className="parts">{props.meaning.partOfSpeech}</h3>
      <div className="definition"> {props.meaning.definition}</div>
      <Examples example={props.meaning.example} />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
