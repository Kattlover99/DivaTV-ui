import {
  faCirclePlay,
  faEllipsisVertical,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { PlaylistPreviewCard, Sidebar, VideoCard } from "../../components";
import { useAuth } from "../../Context/AuthProvider";
import { useData } from "../../Context/Context";
import { deletePlaylist } from "../../Utility/playlistService";

const WatchLater = () => {
  const { watchlater } = useData();

  return (
    <div className="main-page-container">
      <Sidebar />
      <div className="main-page flex-hz">
        {watchlater.length === 0 ? (
          <div className="flex-vt">
            <p className="playlist-page-text">
              You haven't saved any videos yet .
            </p>
            <Link to="/videos" className="links">
              <button className="btn btn-secondary playlist-page-link">
                Get started
              </button>
            </Link>
          </div>
        ) : (
          <>
            {watchlater.map((video) => {
              return (
                <>
                  <VideoCard videoItem={video} />
                </>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};
export { WatchLater };
