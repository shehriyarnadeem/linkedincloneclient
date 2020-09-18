import React from "react";
import Header from "./components/Header";

import "./App.css";

function App({ children }) {
  const [user, setUser] = React.useState(null);
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <MainContent>{children}</MainContent>
      </div>
      )}
    </div>
  );
}

export default App;
