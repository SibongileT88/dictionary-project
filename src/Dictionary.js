import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";
export default function Dictionary() {
  let [keyword, setkeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    //console.log(response.data);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    //documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "0c5feca50of64837dbc3d78adbt43801";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handlekeywordChange(event) {
    // console.log(event.target.value);
    setkeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handlekeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
