import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navpar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.js";
import { useState, useEffect } from "react";
import OGO from "../../assets/internet-of-things-icon-vector.png";
import About from "../../assets/SVG.png";

import Home from "../icons/Home.jsx";
import BlgIcon from "../icons/BlgIcon.jsx";
import ContactIcon from "../icons/ContactIcon.jsx";
import Rgis from "../icons/Rgis.jsx";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

import semiLogo from "../../assets/navStarter.png";
import "./responsive.css"


function Navpar() {
  const [rotateValue, setRotateValue] = useState(0);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate(); // Utilize the useNavigate hook

  useEffect(() => {
    const storedData = localStorage.getItem("registrationData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
      navigate("/home");
    }

    const intervalId = setInterval(() => {
      setRotateValue((prevValue) => prevValue + 1);
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  const handleLogout = () => {
    // Remove data from local storage
    localStorage.removeItem("registrationData");
    setUserData(null); // Update state to reflect logout
  };

  return (
    <Navbar collapseOnSelect expand="lg" id="navo"  style={{height:'fit-content' , padding:'0px 10px'}}>
      <img className="semiLogo" style={{}} src={semiLogo} alt="semi logo" />
        <Navbar.Brand href="/home">
          <img
            className="ogo"
            style={{ transform: `rotate(${rotateValue}deg)`, width: "50px" }}
            src={OGO}
            alt="LOGO"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" me-auto   ">
            <Nav.Link href="/home" className="ah">
              <Home /> Home
            </Nav.Link>
            <Nav.Link className="ah" href="/Blog">
              <BlgIcon /> our blogs{" "}
            </Nav.Link>
            <Nav.Link className="ah" href="/about">
              {" "}
              <img width="25px" src={About} alt="about logo"></img> About us
            </Nav.Link>
            <Nav.Link className="ah" href="/contactUs">
              <ContactIcon /> Contact us{" "}
            </Nav.Link>
          </Nav>
          <Nav>
            {userData ? (
              <>
                {/* Access username */}
                <Nav.Link eventKey={2} href="/profile" className="login">
                  <h5> {userData?.username}!</h5>
                </Nav.Link>
                <Nav.Link
                  eventKey={2}
                  href="/logout"
                  className="login"
                  onClick={handleLogout}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link eventKey={2} href="/login" className="login  ">
                  Login
                </Nav.Link>
                <Nav.Link eventKey={2} href="/register" className="Register">
                  {" "}
                  <Rgis /> Register{" "}
                  <div className="icon">
                    <svg
                      height={24}
                      width={24}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navpar;
