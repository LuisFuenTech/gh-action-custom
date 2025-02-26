import MainContent from "./components/MainContent";
import logo from "./assets/images/logo.png";

import axios from "axios";
console.log("App.js");

function App() {
  axios.get("https://api.github.com/users/octocat").then((response) => {
    console.log(response.data);
  });

  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
