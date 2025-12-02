import React, { useState } from "react";
import "./Dictionary.css";
export default function Dictionary() {
  let [keyword, setkeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for  ${keyword}`);
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
