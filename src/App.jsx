import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import { useState } from "react";
import LoginSignUp from "@components/LoginSignUp/LoginSignUp";
import NavBar from "@components/NavBar/NavBar";
import Landing from "@components/Landing/Landing";
import Contact from "@components/Contact/Contact";
import Logout from "@components/Logout/Logout";
import Error from "@components/Error/Error";

function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("username");
    return saved ? JSON.parse(saved) : null;
  });

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginSignUp setUser={setUser}/>} />
        <Route path="/home" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
