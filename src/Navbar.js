import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="container">
      <nav className="nav mx-auto bg-light">
        <Link className="nav-link active" to="/">
          HOME
        </Link>
        <Link className="nav-link" to="/add">
          Add contact
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
