import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feeds from "./Feeds";
import Login from "./Login";
import { Router } from "react-router-dom";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
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
