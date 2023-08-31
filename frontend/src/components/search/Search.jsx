import React from 'react';
import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai'; // Importing icons
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
            <AiOutlineSearch className="search-icon" /> {/* Using the search icon */}
          </button>
        </div>
      </div>

      <div className="actions">
        <button id="createPostButton">Create Post</button>
        <div className="notifications">
          <AiOutlineBell className="notification-icon" /> {/* Using the notification icon */}
        </div>
        <div className="user-image">
          <img src="user-img.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

