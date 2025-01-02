
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Inventory from './Inventory';
import Layout from './Layout';
import ProtectedRoute from './ProtectedRoute';
import Navbar from './Navbar';

const App = () => {
  return (

    < Router >
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </Layout>
    </Router >

  );
};

export default App;
