import React from "react";
import Home from "./Home";
import Header from "./components/Header";

import "./App.css";

function App({ children }) {
  const [user, setUser] = React.useState(null);
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Home />
      </div>
    </div>
  );
}

export default App;
