import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feeds";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feeds />
      </div>
    </div>
  );
}

export default App;
