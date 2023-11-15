import React from "react";
import "./footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h2>HUBUNGI KAMI</h2>
      <div className="kontak">
        <div className="sub_kontak">
          <GitHubIcon className="kontak_ikon" />
          <Link to="https://github.com/ShintyaDian" className="kontak_link">
            Github/ShintyaDian
          </Link>
        </div>
        <div className="sub_kontak">
          <InstagramIcon className="kontak_ikon" />
          <Link
            to="https://www.instagram.com/shintyadian/"
            className="kontak_link"
          >
            Instagram/shintyadian
          </Link>
        </div>
        <div className="sub_kontak">
          <MailOutlineIcon className="kontak_ikon" />
          shintyadianp@gmail.com
        </div>
      </div>
      <div className="copyright">
        <small>Copyright &copy; 2023 CoMath Advisor</small>
      </div>
    </div>
  );
};

export default Footer;
