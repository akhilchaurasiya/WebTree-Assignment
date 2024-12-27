import React, { useState } from "react";
import "../styles/Sidebar.css";
import {
  FcAbout,
  FcBullish,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcPuzzle,
  FcReadingEbook,
  FcVoicePresentation,
} from "react-icons/fc";
import { PiCertificateFill } from "react-icons/pi";
import image from "../assets/profile.png";

const Sidebar = ({ toggle }) => {
  const [ishover, setIsHover] = useState(false);
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img
              src={image}
              alt="Profile Pic"
              onMouseOver={() => setIsHover(true)}
              onMouseOut={() => setIsHover(false)}
            />
            {ishover && <p className="hover-text">Profile</p>}
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome />
                Home
              </div>
              <div className="nav-link">
                <FcAbout />
                About Us
              </div>
              <div className="nav-link">
                <FcPortraitMode />
                Core Capabilities
              </div>
              <div className="nav-link">
                <FcReadingEbook />
                Operating Mode
              </div>
              <div className="nav-link">
                <FcBullish />
                Investors
              </div>
              <div className="nav-link">
                <FcPuzzle />
                Careers
              </div>
              <div className="nav-link">
                <PiCertificateFill />
                Talents
              </div>
              <div className="nav-link">
                <FcVoicePresentation />
                Testimonials
              </div>
              <div className="nav-link">
                <FcBusinessContact />
                Contact Us
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome title="Home" />
              </div>
              <div className="nav-link">
                <FcAbout title="About" />
              </div>
              <div className="nav-link">
                <FcPortraitMode title="Work Experience" />
              </div>
              <div className="nav-link">
                <FcReadingEbook title="Education" />
              </div>
              <div className="nav-link">
                <FcBullish title="Skills" />
              </div>
              <div className="nav-link">
                <FcPuzzle title="Projects" />
              </div>
              <div className="nav-link">
                <PiCertificateFill title="Certifications" />
              </div>
              <div className="nav-link">
                <FcVoicePresentation title="Testimonials" />
              </div>
              <div className="nav-link">
                <FcBusinessContact title="Contact Me" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
