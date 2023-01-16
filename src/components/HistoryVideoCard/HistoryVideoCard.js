import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useData } from "../../Context/Context";
import { useAuth } from "../../Context/AuthProvider";
import { removeFromHistory } from "../../Utility/historyService";
import "./HistoryVideoCard.css";

const HistoryVideoCard = ({ videoItem }) => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { dispatch } = useData();
  const [showCTAcontainer1, setShowCTAcontainer] = useState(false);

  const openVideoPage = (e) => {
    e.preventDefault();
    if (
      e.target.classList.value !==
      "svg-inline--fa fa-ellipsis-vertical cta-icon"
    ) {
      navigate(`/video/${videoItem._id}`);
    }
  };

  return (
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
            className="remove-from-history-icon"
            icon={faTrash}
            onClick={() =>
              removeFromHistory(
                token,
                dispatch,
                videoItem._id,
                showCTAcontainer1,
                setShowCTAcontainer,
                navigate
              )
            }
          ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};
export { HistoryVideoCard };
