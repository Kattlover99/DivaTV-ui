import React from "react";
import {
  faCirclePlay,
  faEllipsisVertical,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context/AuthProvider";
import { useData } from "../../Context/Context";
import { deletePlaylist } from "../../Utility/playlistService";
import "./PlaylistpreviewCard.css";

const PlaylistPreviewCard = ({ playlist }) => {
  const { dispatch } = useData();
  const [showCTAcontainer, setShowCTAcontainer] = useState(false);
  const { token } = useAuth();
  const navigate = useNavigate();
  const openPlayList = (playlistId) => {
    navigate(`/playlists/${playlistId}`);
  };

  const ctaContainerDisplay = (e) => {
    e.preventDefault();
    setShowCTAcontainer(!showCTAcontainer);
  };

  const deletePlaylistHandler = (playlistId) => {
    deletePlaylist(
      playlistId,
      token,
      dispatch,
      setShowCTAcontainer,
      showCTAcontainer
    );
  };

  return (
    <>
      {playlist.videos.length === 0 ? (
        <>
          <div className="playlist-preview-container flex-vt">
            <div
              className="playlist-preview-container-col1"
              onClick={() => openPlayList(playlist._id)}
            >
              <p className="playlist-empty-text">{playlist.title} is empty!</p>
            </div>
            <div className="playlist-preview-container-col2 flex-hz">
              <p className="playlist-title">{playlist.title}</p>
              <FontAwesomeIcon
                className="preview-icons"
                icon={faEllipsisVertical}
                onClick={(e) => ctaContainerDisplay(e)}
              />
              {showCTAcontainer && (
                <span
                  onClick={(e) => deletePlaylistHandler(playlist._id)}
                  className="playlist-cta-container"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="trash-icon"
                  ></FontAwesomeIcon>
                  <p className="playlist-delete-text">Delete Playlist</p>
                </span>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="playlist-preview-container flex-vt">
            <div
              className="playlist-preview-container-col1"
              onClick={() => openPlayList(playlist._id)}
            >
              <img
                src={`http://i1.ytimg.com/vi/${playlist.videos[0].videoId}/0.jpg`}
                className="playlist-preview-img"
              />
              <div className="video-count-overlay flex-hz">
                <FontAwesomeIcon
                  className="preview-icons circle-play"
                  icon={faCirclePlay}
                ></FontAwesomeIcon>
                <p className="playlist-item-count">{playlist.videos.length}+</p>
              </div>
            </div>
            <div className="playlist-preview-container-col2 flex-hz">
              <p className="playlist-title">{playlist.title}</p>
              <FontAwesomeIcon
                className="preview-icons"
                icon={faEllipsisVertical}
                onClick={(e) => ctaContainerDisplay(e)}
              />
              {showCTAcontainer && (
                <span
                  onClick={(e) => deletePlaylistHandler(playlist._id)}
                  className="playlist-cta-container"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="trash-icon"
                  ></FontAwesomeIcon>
                  <p className="playlist-delete-text">Delete Playlist</p>
                </span>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export { PlaylistPreviewCard };
