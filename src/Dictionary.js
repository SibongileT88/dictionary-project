import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setkeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState([]);

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    //console.log(response.data);
    setResults(response.data);
    let pexelsApiKey =
      "7EeiBBE515gVcL4eik6wNo1tHvcZU1AsOn7GISSBL1R82mThv1qM8arT";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    //let headers = { Authorization: `${pexelsApiKey}` };

    axios
      .get(pexelsApiUrl, { headers: { Authorization: pexelsApiKey } })
      .then(handleImageResponse);
  }

  function search() {
    //documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "0c5feca50of64837dbc3d78adbt43801";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handlekeywordChange(event) {
    // console.log(event.target.value);
    setkeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handlekeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">suggested words: sunshine, wine, help etc.</div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
