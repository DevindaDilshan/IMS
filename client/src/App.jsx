
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Inventory from './Inventory';
import Layout from './Layout';
import Categories from './Categories';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (

    < Router >
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Layout>
    </Router >

  );
};

export default App;
