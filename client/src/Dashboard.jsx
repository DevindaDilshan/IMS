import React from 'react';
import Stack from 'react-bootstrap/Stack'
import { Link } from 'react-router-dom';
import DashCard from './DashCard'

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Stack gap={4} direction='horizontal'>
      <DashCard title="Total Categories" num="5"/>
      <DashCard title="Total Products" num="7"/>
      <DashCard title="Total Admins" num="1"/>
      <DashCard title="Total Customers" num="10"/>
      </Stack>
      <h4>Net Worth</h4>
      <Stack gap={4} direction='horizontal'>
      <DashCard title="Total Net" num="$10,000"/>
      </Stack>
      
    </div>
  );
};

export default Dashboard;
