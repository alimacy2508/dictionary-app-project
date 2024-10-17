import React, { useState } from "react";
import "./DictionaryForm.css";
export default function DictionaryForm() {
  let [searchedword, setSearchedword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${searchedword} defintion`);
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
