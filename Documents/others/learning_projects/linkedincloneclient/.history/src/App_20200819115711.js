import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feeds from "./Feeds";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feeds />
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
