import React from "react";
import Home from "./Home";
import Login from "./Login";
import Header from "./components/Header";

import "./App.css";

function App({ children }) {
  const [user, setUser] = React.useState(null);
  return (
    <div className="App">
      <Header />
      <MainContent className="app__body"></MainContent>
    </div>
  );
}

export default App;
