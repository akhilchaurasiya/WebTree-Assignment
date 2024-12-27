import React, { useState } from "react";
import "../styles/Layout.css";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import Profile from "../components/Profile";
// import OtherDetails from "../components/OtherDetails";

const Layout = ({ user }) => {
  const [toggle, setToggle] = useState(true);
  const items = [{ color: "first" }, { color: "second" }];

  const index = 0;

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <AiOutlineDoubleLeft size={30} />
              ) : (
                <AiOutlineDoubleRight size={30} />
              )}
            </p>
          </div>
          <Sidebar toggle={toggle} />
        </div>
        <div className="components">
          <div className="container header">
            <Header />
          </div>
          <div className="main">
            <div
              className={`carousel ${items[index].color}`}
              style={{ backgroundImage: items[index].color }}
            >
              {items[index].color === "first" ? (
                <div className="wrapper">
                  <div className="space"></div>
                  <Profile user={user} />
                </div>
              ) : (
                <div className="wrapper">
                  <div className="space"></div>
                  <Profile user={user} />
                </div>
              )}
            </div>
          </div>
          <div className="container footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
