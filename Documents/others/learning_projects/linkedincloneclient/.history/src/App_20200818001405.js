import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
