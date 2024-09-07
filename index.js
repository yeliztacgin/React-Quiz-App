import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import QuizPage from './pages/QuizPage';
import Easy from './pages/Easy'; // Easy bileşenini import ettiniz
import Medium from './pages/Medium'; 
import Hard from './pages/Hard'; 
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} /> 
      <Route path="/quiz" element={<QuizPage />} /> 
      <Route path="/easy" element={<Easy />} />
      <Route path="/medium" element={<Medium />} />
      <Route path="/hard" element={<Hard />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
