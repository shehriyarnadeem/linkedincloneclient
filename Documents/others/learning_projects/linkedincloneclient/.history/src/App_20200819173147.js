import React from "react";
import ContentLayout from "./components/ContentLayout";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";

import "./App.css";

function App({ children }) {
  const [user, setUser] = React.useState(null);
  return (
    <div className="App">
      <Router>
        {!user ? (
  
        ): (
            <>
          <Header />
          <ContentLayout></ContentLayout> 
        </>
        )}
      
      </Router>
    </div>
  );
}

export default App;
