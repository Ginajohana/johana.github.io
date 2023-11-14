import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

const PNG_FILE_URL = "/workspaces/johana-cv/src/front/img/cv-johana.png";


export const Navbar = () => {
    
    return (
        <div className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="logo" style={{ "--i": 1 }}>
                    Portfolio
                </Link>

                <Link to="/about" className="navbar-link" style={{ "--i": 2 }}>
                    About
                </Link>

                <Link to="/skills" className="navbar-link" style={{ "--i": 3 }}>
                    Skills
                </Link>

                <Link to="/portfolio" className="navbar-link" style={{ "--i": 4 }}>
                    Project
                </Link>
            </div>
          </div>
    
    );
}