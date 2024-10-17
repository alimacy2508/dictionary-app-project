import "./App.css";
import DictionaryImage from "./DictionaryImage.png";

export default function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <img src={DictionaryImage} className="App-logo img-fluid" alt="logo" />
      <a href="#" className="btn btn-primary">
        Button
      </a>
    </div>
  );
}
