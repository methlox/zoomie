import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages'
import Login from './pages/login';
import wallet from './pages/wallet';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/wallet" element={<wallet />} exact />
        </Routes>
    </Router>
  );
}

export default App;
