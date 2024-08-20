import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/screens/about'
import Splash from './components/screens/splash'
import Projects from './components/screens/projects'

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Splash/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
