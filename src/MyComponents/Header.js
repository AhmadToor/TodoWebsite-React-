import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import useParams hook

export default function Header({ setSearchInput,searchInput}) { // Accept setSearchIndex prop
  
  const { searchParam } = useParams(); // Initialize useParams

  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Todo List</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/list">List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          {/* Use onSubmit event on form */}
          <form className="d-flex" >
            <input 
              className="form-control me-2" 
              type="number" 
              placeholder="Search by Serial No." 
              aria-label="Search"
              value={searchInput} // Bind input value to searchInput state
              onChange={(e) => {
                
                setSearchInput(e.target.value)
              }
                } // Update searchInput state on change
            />
            <Link to={`/search/${searchInput}`} className="btn btn-primary btn-outline-light" type="submit">Search</Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
