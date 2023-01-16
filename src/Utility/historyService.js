import axios from "axios";

export const addVideoToHistory = async (token, video, dispatch, navigate) => {
  if (token) {
    try {
      const res = await axios.post(
        "/api/user/history",
        { video: video },
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch({ type: "UPDATE_HISTORY", payload: res.data.history });
    } catch (error) {
      console.log(error);
    }
  } else {
    navigate("/signin");
  }
};

export const removeFromHistory = async (token, dispatch, videoId) => {
  try {
    const res = await axios.delete(`/api/user/history/${videoId}`, {
      headers: {
        authorization: token,
      },
    });

    dispatch({ type: "UPDATE_HISTORY", payload: res.data.history });
  } catch (error) {
    console.log(error);
  }
};

export const clearHistory = async (token, dispatch) => {
  try {
    const res = await axios.delete(`/api/user/history/all`, {
      headers: {
        authorization: token,
      },
    });

    dispatch({ type: "UPDATE_HISTORY", payload: res.data.history });
  } catch (error) {
    console.log(error);
  }
};
