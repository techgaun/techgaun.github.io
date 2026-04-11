import { Facebook, Instagram, Mail, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLeft">
        <div className="footerTitle">GET IN TOUCH</div>
        <div className="footMain">
          Let's create <br /> <i className="fSub">something remarkable</i>
        </div>
        <div className="footSub">
          Whether you're a founder seeking a technical co-pilot, an investor
          looking to collaborate, or simply want to connect I'm always open to
          meaningful conversations.
        </div>
      </div>
      <div className="footerRight">
        <div className="fTitle">Current Availability</div>
        <div className="availability">
          <span className="dot"></span>Open to advisory roles & angel
          investments
        </div>
        <div className="flocation">
          <p>Based In</p>
          <div className="firstLocation">Kansas City, US</div>
          <div className="secondLocation">
            <span style={{ color: "#eba224" }}>Kathmandu, Nepal</span>{" "}
            (hometown)
          </div>
        </div>
        <div className="socials">
          <p>Connect</p>
          <div className="socialLinks">
            <a href="#">
              <Facebook color="white" />
            </a>
            <a href="#">
              <Instagram color="white" />
            </a>
            <a href="#">
              <Mail color="white" />
            </a>
            <a href="#">
              <Twitter color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
