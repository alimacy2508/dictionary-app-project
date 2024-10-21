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
          <DictionaryForm defaultSearchedword={"forest"} />
        </main>
        <footer className="App-footer">
          This project was coded by Alice and is open-sourced on{" "}
          <a
            href="https://github.com/alimacy2508/dictionary-app-project"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and{" "}
          <a
            href="https://my-dictionary-project.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
