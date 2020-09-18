import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/HomeSidebar";
import Feeds from "./components/Feeds";
import Login from "./Login";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App({ children }) {
  const [user, setUser] = React.useState(null);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <MainContent>{children}</MainContent>
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
