import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LandingPage />
      </header>
    </div>
  );
}

export default App;
