import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3 className="parts">{props.meaning.partOfSpeech}</h3>
      <p className="definition">{props.meaning.definition}</p>
      <Examples example={props.meaning.example} />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
