import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-row">
      <Sidebar className="flex-fill" />
      <div className="d-flex flex-column flex-fill">
        <Navbar className="flex-fill"/>
        <div className="p-4 flex-fill">{children}</div>
        <Footer className="flex-fill" />
      </div>

    </div>
  );
};

export default Layout;
