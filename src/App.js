import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FetchProjects from './components/apiCalls/fetchProjects'
import Home from './components/screens/home'
import Apps from './components/screens/apps'
import Shop from './components/screens/shop'
import Login from './components/screens/login'

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
            <Route path="/" element={<Home/>}/>
            <Route path="/apps" element={<Apps/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
