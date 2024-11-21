import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/EmployeeDashboard.scss';


function EmployeeDashboard() {
  return (
    <div className="employee-dashboard">
      <div className="sidebar">
        <div className="sidebar-logo">
          <h2>FinSight</h2>
        </div>
        <ul className="sidebar-links">
          <li>
            <Link to="/employee-profile">Profile</Link>
          </li>
          <li>
            <Link to="/employee-reports">Reports</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Welcome to the Employee Dashboard</h1>
        <p>Here you can manage your reports, view your profile, and more.</p>
        <div className="employee-info">
          <h3>Your Information</h3>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
          <p><strong>Role:</strong> Employee</p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
