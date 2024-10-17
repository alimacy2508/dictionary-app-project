import React, { useState } from "react";
import "./DictionaryForm.css";
import axios from "axios";

export default function DictionaryForm() {
  let [searchedword, setSearchedword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${searchedword} defintion`);
    let apiKey = "bbco0f50t952db4519a3613cfbc4bfb3";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchedword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateSearchedword(event) {
    setSearchedword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter your chosen word"
          onChange={updateSearchedword}
        />
      </form>
    </div>
  );
}
