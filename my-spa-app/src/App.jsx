import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ErrorBoundary from './components/ErrorBoundary';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Головна</Link></li>
              <li><Link to="/contact">Контакти</Link></li>
              <li><Link to="/about">Про мене</Link></li>
            </ul>
          </nav>
          <ThemeSwitcher />
        </header>
        <main>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </ErrorBoundary>
        </main>
      </div>
    </Router>
  );
}

export default App;
