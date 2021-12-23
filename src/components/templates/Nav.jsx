import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";

export default (props) => (
  <aside className="menu-area">
    <nav className="menu">
      <Link to="/">Home</Link>
      <Link to="/users">Usuários</Link>
    </nav>
  </aside>
);
