import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h1>Dashboard</h1>
      <Link to="/inventory" className="btn btn-success">
        Manage Inventory
      </Link>
    </div>
  );
};

export default Dashboard;
