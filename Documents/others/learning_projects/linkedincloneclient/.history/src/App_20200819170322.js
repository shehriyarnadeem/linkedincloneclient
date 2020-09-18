import React from "react";
import ContentLayout from
import Header from "./components/Header";

import "./App.css";

function App({ children }) {
  const [user, setUser] = React.useState(null);
  return (
    <div className="App">
      <Header />
      <ContentLayout className="app__body"></ContentLayout>
    </div>
  );
}

export default App;
