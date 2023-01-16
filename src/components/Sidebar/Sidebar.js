import {
  faCircle,
  faCirclePlay,
  faClock,
  faCompass,
  faHeart,
  faPlayCircle,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCompactDisc,
  faHeartbeat,
  faHistory,
  faHome,
  faStopwatch,
  faUpload,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container flex-vt">
        <Link to="/" className="links">
          <div className="sidebar-item flex-hz">
            <FontAwesomeIcon
              className="sidebar-icon"
              icon={faHome}
            ></FontAwesomeIcon>
            <p className="sidebar-text">Home</p>
          </div>
        </Link>
       <Link to="/videos" className="links">
       <div className="sidebar-item flex-hz">
          <FontAwesomeIcon
            className="sidebar-icon"
            icon={faCompass}
          ></FontAwesomeIcon>
          <p className="sidebar-text">Explore</p>
        </div></Link>
        <Link to="/playlists" className="links">
          {" "}
          <div className="sidebar-item flex-hz">
            <FontAwesomeIcon
              className="sidebar-icon"
              icon={faCirclePlay}
            ></FontAwesomeIcon>
            <p className="sidebar-text">Playlist</p>
          </div>
        </Link>
        <Link to="/likedvideos" className="links">
          <div className="sidebar-item flex-hz">
            <FontAwesomeIcon
              className="sidebar-icon"
              icon={faThumbsUp}
            ></FontAwesomeIcon>
            <p className="sidebar-text">Liked</p>
          </div>
        </Link>
        <Link to="/history" className="links">
          <div className="sidebar-item flex-hz">
            <FontAwesomeIcon
              className="sidebar-icon"
              icon={faHistory}
            ></FontAwesomeIcon>
            <p className="sidebar-text">History</p>
          </div>
        </Link>
        <Link to="/watchlater" className="links">
          <div className="sidebar-item flex-hz">
            <FontAwesomeIcon
              className="sidebar-icon"
              icon={faClock}
            ></FontAwesomeIcon>
            <p className="sidebar-text">Watch later</p>
          </div>
        </Link>
        <Link to="/uploadedVideos" className="links">
          <div className="sidebar-item flex-hz">
            <FontAwesomeIcon
              className="sidebar-icon"
              icon={faUpload}
            ></FontAwesomeIcon>
            <p className="sidebar-text">Upload Video</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export { Sidebar };
