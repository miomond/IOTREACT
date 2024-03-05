import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import "./App.css";
import ContactUs from "./pages/contactUs/ContactUs";
import BlogPage from "./pages/blog/BlogPage";
import Navpar from "./components/NAv/Navpar";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import About from "./pages/about-us-page/About";

function App() {
  return (
    <Router>
      <React.Fragment>
       
            <Navpar></Navpar>
        <Routes>
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </React.Fragment>
    </Router>
  );
}

export default App;
