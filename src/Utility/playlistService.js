import axios from "axios";
import { Navigate } from "react-router-dom";

export const addNewPlayList = async (playlistName, dispatch, token) => {
  try {
    const res = await axios.post(
      "/api/user/playlists",
      {
        playlist: { title: playlistName, description: "" },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({ type: "SET_PLAY_LIST", payload: res.data.playlists });
  } catch (error) {
    console.log(error);
  }
};

export const addVideoToPlayList = async (
  playlistId,
  dispatch,
  token,
  currentVideo
) => {
  console.log(currentVideo);

  try {
    const res = await axios.post(
      `/api/user/playlists/${playlistId}`,
      {
        video: { ...currentVideo },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({ type: "UPDATE_PLAY_LIST", payload: res.data.playlist });
  } catch (error) {
    console.log(error);
  }
};

export const removeVideofromPlaylist = async (
  playlistId,
  videoId,
  token,
  dispatch,
  setShowCTAcontainer,
  showCTAcontainer
) => {
  try {
    const res = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({ type: "UPDATE_PLAY_LIST", payload: res.data.playlist });
    setShowCTAcontainer(!showCTAcontainer);
  } catch (error) {
    console.log(error);
  }
};

export const deletePlaylist = async (
  playlistId,
  token,
  dispatch,
  setShowCTAcontainer,
  showCTAcontainer
) => {
  try {
    const res = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: "UPDATE_PLAYLISTS", payload: res.data.playlists });
    setShowCTAcontainer(!showCTAcontainer);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
