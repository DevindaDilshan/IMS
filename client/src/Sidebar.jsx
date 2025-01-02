import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="d-flex flex-column vh-100 bg-light" style={{ width: "250px" }}>
      <Nav className="flex-column mt-3">
        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
        <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
        <Nav.Link as={Link} to="/add-item">Categories</Nav.Link>
        <Nav.Link as={Link} to="/add-item">Products</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
