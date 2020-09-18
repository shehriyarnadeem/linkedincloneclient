import React from "react";
import ContentLayout from "./components/ContentLayout";
import Header from "./components/Header";

import "./App.css";

function App({ children }) {
  const [user, setUser] = React.useState(null);
  return (
    <div className="App">
      <Header />
      <ContentLayout>{children}</ContentLayout>
    </div>
  );
}

export default App;
