import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>My Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunshine" />
        </main>
        <footer className="App-footer">
          Coded by Sibongile Tsopo. The code is{" "}
          <a href="https://github.com/SibongileT88/dictionary-project">
            open sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://silly-caramel-4f729c.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
