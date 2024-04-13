import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CrewmateList from './components/CrewmateList';
import CrewmateInfo from './components/CrewmateInfo';
import CrewmateForm from './components/CrewmateForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CrewmateList />} />
        <Route path="/crewmate/:id" element={<CrewmateInfo />} />
        <Route path="/add-crewmate" element={<CrewmateForm />} />
      </Routes>
    </Router>
  );
};

export default App;
