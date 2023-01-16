import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./VideoPage.css";
import { Sidebar } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faClock,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as regThumbs } from "@fortawesome/free-regular-svg-icons";
import {
  addVideoToLikedVideos,
  isLiked,
  removeFromlikedVideos,
} from "../../Utility/likeVideoService";
import { useData } from "../../Context/Context";
import { useAuth } from "../../Context/AuthProvider";
import { LikedVideosPage } from "../LikedVideosPage/LikedVideosPage";
import { addVideoToHistory } from "../../Utility/historyService";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";

const VideoPage = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const { dispatch, likedVideos } = useData();
  const [video, setVideo] = useState({});

  useEffect(() => {
    async function fetchVideo() {
      try {
        const res = await axios.get(`/api/video/${videoId}`);
        setVideo(res.data.video);
      } catch (e) {
        console.log(e);
      }
    }
    fetchVideo();
  }, [ videoId]);
  
  const ans=isLiked(video,likedVideos)
  console.log(ans)
  return (
    <div className="main-page-container">
      <Sidebar />
      <div className="main-page flex-vt">
        <iframe
          className="video-container"
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video.videoId}`}
          onClick={() => addVideoToHistory(token, video, dispatch, navigate)}
        ></iframe>
        <p className="video-page-title">{video.title}</p>
        <div className="video-page-action-container flex-hz">
      
           {isLiked(video, likedVideos)!==false ? (
            <>
              <div
                className="video-page-action flex-hz"
                onClick={() =>
                  removeFromlikedVideos(
                    token,
                    dispatch,
                    video._id,
                    null,
                    null,
                    null
                  )
                }
              >
                <FontAwesomeIcon
                  className="video-page-action-icon"
                  icon={faThumbsUp}
                ></FontAwesomeIcon>{" "}
                <p className="video-page-action-text">Liked</p>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div
                className="video-page-action flex-hz"
                onClick={() =>
                  addVideoToLikedVideos(token, video, dispatch, navigate)
                }
              >
                <FontAwesomeIcon
                  className="video-page-action-icon"
                  icon={regThumbs}
                ></FontAwesomeIcon>{" "}
                <p className="video-page-action-text">Like</p>
              </div>
            </>
          )} 
        </div>
        <p className="page-subtitle">Description</p>
        <p className="video-page-desc">{video.description}</p>
      </div>
    </div>
  );
};
export { VideoPage };
