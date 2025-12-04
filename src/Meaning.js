import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3 className="parts">{props.meaning.partOfSpeech}</h3>
      <p className="definition">{props.meaning.definition}</p>
    </div>
  );
}
