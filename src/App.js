import {BrowserRouter as Router, Routes, Route} from 'react-router';
import './App.css';
import LandingPage from './Components/LoginSignUp/LandingPage';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import Logout from './Components/Logout/Logout'

function App() {
    return (<Router>
        <NavBar/>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/logout' element={<Logout/>}/>

        </Routes>
    </Router>);
}

export default App;
