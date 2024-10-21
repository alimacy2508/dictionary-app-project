import React, { useState } from "react";
import "./DictionaryForm.css";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function DictionaryForm(props) {
  let [searchedword, setSearchedword] = useState(props.defaultSearchedword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  function handleResponse(response) {
    setResults(response.data);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiKey = "bbco0f50t952db4519a3613cfbc4bfb3";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchedword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let apiImageKey = "bbco0f50t952db4519a3613cfbc4bfb3";
    let apiImageUrl = `https://api.shecodes.io/images/v1/search?query=${searchedword}&key=${apiImageKey}`;
    axios.get(apiImageUrl).then(handleImageResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateSearchedword(event) {
    setSearchedword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word would you like to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={updateSearchedword}
              defaultValue={props.defaultSearchedword}
            />
          </form>
          <div className="hint">
            suggested words: cozy, tea, leaves, autumn...
          </div>
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
