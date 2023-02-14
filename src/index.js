import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/About';
import POPOSList from './components/POPOSList/POPOSList';
import POPOSDetails from './components/POPOSDetails/POPOSDetails';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/" element={<POPOSList />} />
      <Route path="about" element={<About />} />
      <Route path="/details/:id" element={<POPOSDetails />} />
    </Route>
  </Routes>
</Router>,
document.getElementById('root')
);

reportWebVitals();
