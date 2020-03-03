import React from 'react';
import './App.css';
import Parallax from 'react-rellax'

function App() {
  return (
    <div className="App">
      <Parallax speed={-1}> <h1>P</h1> </Parallax>
      <Parallax speed={-3}> <h1>A</h1> </Parallax>
      <Parallax speed={-5}> <h1>R</h1> </Parallax>
      <Parallax speed={-3}> <h1>A</h1> </Parallax>
      <Parallax speed={-5}> <h1>L</h1> </Parallax>
      <Parallax speed={-3}> <h1>L</h1> </Parallax>
      <Parallax speed={-3}> <h1>A</h1> </Parallax>
      <Parallax speed={-3}> <h1>X</h1> </Parallax>
    </div>
  );
}

export default App;
