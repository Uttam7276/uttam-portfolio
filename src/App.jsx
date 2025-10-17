import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Summary from './pages/Summary';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Hobbies from './pages/Hobbies';
import Resume from './pages/Resume';
import './index.css';

export default function App(){
  return (
    <BrowserRouter>
      <Nav />
      <div style={{padding:20}}>
        <Routes>
          <Route path="/" element={<Summary/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/hobbies" element={<Hobbies/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
