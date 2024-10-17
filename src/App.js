import "./App.css";
import DictionaryImage from "./DictionaryImage.png";
import DictionaryForm from "./DictionaryForm.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <img src={DictionaryImage} className="App-logo img-fluid" alt="logo" />
        <main>
          <DictionaryForm />
        </main>
        <footer className="App-footer">Coded by Alice</footer>
      </div>
    </div>
  );
}
