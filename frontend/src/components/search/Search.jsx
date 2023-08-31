import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import logo from "../../assets/images/dev.png";
import './search.css';

export const Search = () => {
  return (
    <div className="headers">
      <div className="search">
        <div className="logos">
          <img src={logo} alt="" />
        </div>
        <div className="search-bar">
          <input type="text" id="searchInput" placeholder="Search..." />
          <button id="searchButton">
            <AiOutlineSearch className="search-icon" /> 
          </button>
        </div>
      </div>

      <div className="actions">
        <button id="createPostButton">Create Post</button>
      </div>
    </div>
  );
};

