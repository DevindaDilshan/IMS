import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="p-4 w-100">{children}</div>
    </div>
  );
};

export default Layout;
