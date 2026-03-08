import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import LoginSignUp from "./Components/LoginSignUp/LoginSignUp";
import NavBar from "./Components/NavBar/NavBar";
import Landing from "./Components/Landing/Landing";
// import About from './Components/About/About';
import Contact from "./Components/Contact/Contact";
import Logout from "./Components/Logout/Logout";
import Error from "./Components/Error/Error";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginSignUp />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
