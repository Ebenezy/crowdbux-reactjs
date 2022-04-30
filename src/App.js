import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.js';

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
    </Router>
  );
}

export default App;
