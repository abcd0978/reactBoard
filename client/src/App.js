import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/Pages/LandingPage";
import LoginPage from "./components/Pages/LoginPage";
import SignupPage from"./components/Pages/SignupPage";
import Footer from "./components/Footer/Footer";
import HostPockerPage from "./components/Pages/HostPockerPage";
function App() {
  return (
    <div>

      <Navbar/>

      <div style={{ minHeight: 'calc(100vh - 80px)' }}> 
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/login" element={<LoginPage/>}/>
        <Route exact path="/signup" element={<SignupPage/>} />
        <Route exact path="/host" element={<HostPockerPage/>} />
      </Routes>
      </div>

      <Footer/>
      
    </div>
  );
}

export default App;
