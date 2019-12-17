import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import Aside from './components/Aside'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Main></Main>
      <Aside></Aside>
    </div>
  );
}

export default App;