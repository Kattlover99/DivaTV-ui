import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Context/Context";
import "./Searchbar.css";

const Searchbar = () => {
  const { videos } = useData();
  const [searchResults, setSearchResults] = useState([]);
  const [searchWord, setsearchWord] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setsearchWord(e.target.value);
    const filteredData = videos.filter((prd) => {
      return prd.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    setSearchResults(filteredData);
  };

  const openVideoPage = (videoId) => {
    navigate(`/video/${videoId}`);
    setSearchResults([]);
    setsearchWord("");
  };

  return (
    <>
      <div className="searchbar-container">
        <label className="searchbar">
          <span>
            <i class="fa fa-search"></i>
          </span>
          <input
            type="text"
            class="search-input"
            value={searchWord}
            placeholder="Search for videos..."
            onChange={(e) => handleChange(e)}
          />
          {searchResults.length !== 0 && (
            <>
              {" "}
              <div className="searchResults-container">
                {searchResults.map((prd) => (
                  <p
                    className="searchItem"
                    onClick={() => openVideoPage(prd._id)}
                  >
                    {prd.title}
                  </p>
                ))}
              </div>
            </>
          )}
        </label>
      </div>
    </>
  );
};

export { Searchbar };

