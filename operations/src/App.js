import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './Components/Name';
import Age from './Components/Age';
import Admin from './Components/Admin';

function App() {
  return (
  <div>
    <Name name="Данила" />
    <Age age={20} />
    <Admin isAdmin={true} />
  </div>
  );
}

export default App;
