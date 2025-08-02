import {BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LeaderBoard from "./pages/Leaderboard";
import Dashboard from "./pages/Dashboard";



function App() {
  
  return (
    
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/leaderboard" element={<LeaderBoard />} />
      <Route path="/dashboard" element={<Dashboard /> } />
      
      
      </Routes>

    </BrowserRouter>

  );
}

export default App