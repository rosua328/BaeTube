import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch, BsYoutube } from "react-icons/bs";
import "./SearchBar.css";

export default function SearchBar() {
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState("");

  const handleHomeLink = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${searchData}`);
  };

  const handleChange = (e) => {
    setSearchData(e.target.value);
  };

  return (
    <header>
      <div className="search-logo-container" onClick={handleHomeLink}>
        <BsYoutube className="search-logo" />
        <h1 className="search-title">BaeTube</h1>
      </div>

      <form className="search-container" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="search..."
          onChange={handleChange}
        />
        <button className="search-button">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
