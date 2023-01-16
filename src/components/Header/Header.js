import { faUser, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";
import { Searchbar } from "../Searchbar/Searchbar";
import "./Header.css";

const Header = () => {
  const { token, setToken } = useAuth();

  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    setToken(undefined);
    navigate("/");
  };

  return (
    <>
      <div class="navigation-container flex-hz">
        <div className="navigation-item-1 flex-hz jc-sb">
          <Link className="links" to="/">
            <h5 class="lib-name-1">
              Diva <span class="lib-name-2">TV</span>
            </h5>
          </Link>
          <Link to="/videos" className="links header-link">
            Explore{" "}
          </Link>
          <Link to="/playlists" className="links header-link">
            Playlist{" "}
          </Link>
        </div>
        <Searchbar />
        {token ? (
          <>
            {" "}
            <div class="navigation-item-3 flex-hz">
              <Link to="/signin">
                <button class="btn btn-primary" onClick={handleLogout}>
                  Logout
                </button>
              </Link>
              <Link to="/userProfile" className="links">
                <FontAwesomeIcon
                  className="icons user-icon"
                  icon={faUserCircle}
                ></FontAwesomeIcon>
              </Link>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div class="navigation-item-3 flex-hz">
              <Link to="/signin">
                <button class="btn btn-primary">Signin</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export { Header };
