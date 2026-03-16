import React, { useState } from "react";
import "./App.scss";
import Main from "./containers/Main";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div>
      <Main language={language} setLanguage={setLanguage} />
    </div>
  );
}

export default App;