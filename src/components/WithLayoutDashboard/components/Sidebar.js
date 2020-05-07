import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="app-sidebar app-dashboard-sidebar">
        <div className="sidebar-box">
          <ul>
            <li>
              <Link to="/user">User</Link>
            </li>
            <li>Role</li>
            <li>
              <Link to="/list-menu">Menu manager</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
