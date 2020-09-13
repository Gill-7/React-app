import React from 'react';
import './App.css';
import Circle from './components/Circle'

function App() {
  var theCircle = <Circle color="#fed9b7" />
  return (
    <div className="App">
      <div id='contain'>
        {theCircle}
      </div>
      
    </div>
  );
}

export default App;
