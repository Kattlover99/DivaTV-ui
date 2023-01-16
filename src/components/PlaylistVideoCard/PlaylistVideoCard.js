import {
  faCirclePlay,
  faClock,
  faEllipsisVertical,
  faStopwatch,
  faTrash,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./PlaylistVideoCard.css";
import { PlayListModal } from "../PlayListModal/PlayListModal";
import { useData } from "../../Context/Context";
import { useAuth } from "../../Context/AuthProvider";
import { removeVideofromPlaylist } from "../../Utility/playlistService";

const PlaylistVideoCard = ({ videoItem, playlistId }) => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { showPlaylistModal, setCurrentVideo, dispatch } = useData();
  const [showCTAcontainer, setShowCTAcontainer] = useState(false);

  const openVideoPage = (e) => {
    e.preventDefault();
    if (
      e.target.classList.value !==
      "svg-inline--fa fa-ellipsis-vertical cta-icon"
    ) {
      navigate(`/video/${videoItem._id}`);
    }
  };

  const ctaContainerDisplay = (e) => {
    e.preventDefault();
    if (token) {
      setShowCTAcontainer(!showCTAcontainer);
    } else {
      navigate("/signin");
    }
  };

  const displayPlaylistModal = () => {
    dispatch({ type: "SHOW_PLAYLIST_MODAL", payload: !showPlaylistModal });
    setShowCTAcontainer(!showCTAcontainer);
    setCurrentVideo(videoItem);
  };

  return (
    <>
      <div className="video-item-container flex-vt">
        <div className="video-img-container">
          <img
            className="video-img"
            src={`http://i1.ytimg.com/vi/${videoItem.videoId}/0.jpg`}
            alt="video-thumbnail"
            onClick={openVideoPage}
          ></img>
        </div>
        <div className="video-item-footer flex-hz">
          <div className="video-item-footer-1 flex-vt">
            <p className="video-title">{videoItem.title}</p>
            <p className="video-category">{videoItem.category}</p>
          </div>
          <div className="video-item-footer-2">
            <FontAwesomeIcon
              className="cta-icon"
              icon={faEllipsisVertical}
              onClick={(e) => ctaContainerDisplay(e)}
            ></FontAwesomeIcon>
            {showCTAcontainer && (
              <>
                <div
                  className="video-item-cta-container flex-vt"
                  onClick={() =>
                    removeVideofromPlaylist(
                      playlistId,
                      videoItem._id,
                      token,
                      dispatch,
                      setShowCTAcontainer,
                      showCTAcontainer
                    )
                  }
                >
                  <div className="video-item-cta-item flex-hz">
                    <FontAwesomeIcon
                      className="video-item-cta-icon"
                      icon={faTrash}
                    ></FontAwesomeIcon>
                    <p className="playlist-video-item-cta-text">
                      Remove from Playlist
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {showPlaylistModal && <PlayListModal />}
    </>
  );
};
export { PlaylistVideoCard };
