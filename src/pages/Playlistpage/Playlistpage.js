import {
  faCirclePlay,
  faEllipsisVertical,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { PlaylistPreviewCard, Sidebar } from "../../components";
import { useAuth } from "../../Context/AuthProvider";
import { useData } from "../../Context/Context";
import { deletePlaylist } from "../../Utility/playlistService";
import "./Playlistpage.css";

const Playlistpage = () => {
  const { playlists } = useData();

  return (
    <div className="main-page-container">
      <Sidebar />
      <div className="main-page flex-hz">
        {playlists.length === 0 ? (
          <div className="flex-vt">
            <p className="playlist-page-text">
              You haven't created any playlist yet .
            </p>
            <Link to="/videos" className="links">
              <button className="btn btn-secondary playlist-page-link">
                Get started
              </button>
            </Link>
          </div>
        ) : (
          <>
            {playlists.map((playlist) => {
              return (
                <>
                  <PlaylistPreviewCard playlist={playlist} />
                </>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};
export { Playlistpage };
