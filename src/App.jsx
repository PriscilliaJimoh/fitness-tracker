import './App.css';

import Contact from '@components/Contact/Contact';
import Error from '@components/Error/Error';
import Landing from '@components/Landing/Landing';
import LoginSignUp from '@components/LoginSignUp/LoginSignUp';
import Logout from '@components/Logout/Logout';
import NavBar from '@components/NavBar/NavBar';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('username');
    return saved ? JSON.parse(saved) : null;
  });

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginSignUp setUser={setUser} />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
