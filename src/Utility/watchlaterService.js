import axios from "axios";
import { Navigate } from "react-router-dom";

export const addToWatchLater = async (
  token,
  dispatch,
  videoItem,
  showCTAcontainer,
  setShowCTAcontainer,
  navigate
) => {
  if (token) {
    try {
      const res = await axios.post(
        "/api/user/watchlater",
        { video: videoItem },
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch({ type: "UPDATE_WATCH_LATER", payload: res.data.watchlater });
      setShowCTAcontainer(!showCTAcontainer);
    } catch (error) {
      console.log(error);
    }
  } else {
    navigate("/signin");
  }
};

export const removeFromWatchLater = async (
  token,
  dispatch,
  videoId,
  showCTAcontainer,
  setShowCTAcontainer,
  navigate
) => {
  if (token) {
    try {
      const res = await axios.delete(`/api/user/watchlater/${videoId}`, {
        headers: {
          authorization: token,
        },
      });
      dispatch({ type: "UPDATE_WATCH_LATER", payload: res.data.watchlater });
      setShowCTAcontainer(!showCTAcontainer);
    } catch (error) {
      console.log(error);
    }
  } else {
    navigate("/signin");
  }
};
