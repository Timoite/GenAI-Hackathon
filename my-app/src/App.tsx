// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopicInput from './TopicInput'; // Make sure to create this component
import Timeline from './Timeline';     // Make sure to create this component
import 'flowbite';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopicInput />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </Router>
  );
};

export default App;
