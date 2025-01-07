import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="d-flex flex-column vh-100 bg-dark" style={{ width: "250px" }}>
      <div className="text-white text-center">
        <h1>IMS</h1>
      </div>
      <Nav className="flex-column mt-3">
        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
        <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
        <Nav.Link as={Link} to="/Categories">Categories</Nav.Link>
        <Nav.Link as={Link} to="/">Another</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
