import React, { useState }from 'react';
import './App.css';
import Adding from "./Adding"

function App() {
  const [user, setUser] = useState({})
  return (
    <div className="App">
      <Adding />
    </div>
  );
}

export default App;
