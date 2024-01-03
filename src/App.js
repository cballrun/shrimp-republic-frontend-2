import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FetchProjects from './components/apiCalls/fetchProjects'
import Team from './components/screens/team'
import Splash from './components/screens/splash'
import Projects from './components/screens/projects'

function App() {
  const [projects, setProjects] = useState("")

  useEffect(() => {
    FetchProjects({
        setProjects
    })
  }, []) 


  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Splash/>}/>
            <Route path="/projects" element={<Projects projects={projects}/>}/>
            <Route path="/team" element={<Team/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
