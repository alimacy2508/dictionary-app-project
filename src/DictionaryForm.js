import React, { useState } from "react";
import "./DictionaryForm.css";
import axios from "axios";
import Results from "./Results.js";

export default function DictionaryForm(props) {
  let [searchedword, setSearchedword] = useState(props.defaultSearchedword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    let apiKey = "bbco0f50t952db4519a3613cfbc4bfb3";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchedword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
