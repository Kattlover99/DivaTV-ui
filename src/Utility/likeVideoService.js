import axios from "axios";
export const addVideoToLikedVideos = async (
  token,
  videoItem,
  dispatch,
  navigate
) => {
  console.log(token);
  if (token) {
    try {
      const res = await axios.post(
        "/api/user/likes",
        { video: videoItem },
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch({ type: "ADD_VIDEO_TO_LIKED_VIDEOS", payload: res.data.likes });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  } else {
    navigate("/signin");
  }
};

export const removeFromlikedVideos = async (
  token,
  dispatch,
  videoItemId,
  showCTAcontainer,
  setShowCTAcontainer,
  navigate
) => {
  try {
    const res = await axios.delete(`/api/user/likes/${videoItemId}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: "ADD_VIDEO_TO_LIKED_VIDEOS", payload: res.data.likes });
    setShowCTAcontainer(!showCTAcontainer);
  } catch (error) {
    console.log(error);
  }
};

export const isLiked = (video, likedVideos) => {
  if (likedVideos.length !== 0) {
    const isVideoLiked = likedVideos.find((v) => v._id === video._id);
    if (isVideoLiked !== undefined) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
