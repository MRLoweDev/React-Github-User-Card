import React from 'react';
import './App.css';
import User from "./components/User";
import Followers from "./components/Followers"

function App() {

  return (

    <div className="App">

     <h1>MrLoweDev GitHub page</h1>
          <User  />
          <Followers />

    </div>
  );
}

export default App; 