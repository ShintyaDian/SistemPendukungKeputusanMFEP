import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import FeedIcon from "@mui/icons-material/Feed";
import CalculateIcon from "@mui/icons-material/Calculate";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav_container">
        <Link to="/" className="logo">
          COMATH ADVISOR
        </Link>
        <div className="nav_menu">
          <Link to="/" className="link_sm">
            <HomeIcon />
          </Link>
          <Link to="/" className="link">
            Beranda
          </Link>
          <Link to="/info" className="link_sm">
            <FeedIcon />
          </Link>
          <Link to="/info" className="link">
            Informasi
          </Link>
          <Link to="/calculate" className="link_sm">
            <CalculateIcon />
          </Link>
          <Link to="/calculate" className="link">
            SPK
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
