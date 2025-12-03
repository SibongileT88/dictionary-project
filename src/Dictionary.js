import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
export default function Dictionary() {
  let [keyword, setkeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    //documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "0c5feca50of64837dbc3d78adbt43801";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handlekeywordChange(event) {
    console.log(event.target.value);
    setkeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handlekeywordChange} />
      </form>
    </div>
  );
}
