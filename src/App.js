import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Popover from './components/FloatingIcon/Popover'; 
import OptionsMenu from './components/OptionsMenu/OptionsMenu'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Popover />} /> 
          <Route path="/options" element={<OptionsMenu />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;


