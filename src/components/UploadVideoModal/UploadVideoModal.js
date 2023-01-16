import { v4 as uuidv4 } from "uuid";
import React from "react";
import { useState } from "react";
import { useData } from "../../Context/Context";
import "./UploadVideoModal.css";
import { Toast } from "../Toast/Toast";

const UploadVideoModal = ({ showVideoModal, setShowVideoModal }) => {
  const { showtoast, dispatch } = useData();
  const { categories } = useData();
  const [videoDetails, setVideoDetails] = useState({
    _id: uuidv4(),
    videoId: "",
    title: "",
    category: "",
    description: "",
    uploaded: new Date(),
  });
  const [msg, setMsg] = useState("");
  const uploadNewVideo = () => {
    if (
      videoDetails.title !== "" &&
      videoDetails.category !== "" &&
      videoDetails.description !== ""
    ) {
      dispatch({ type: "ADD_NEW_VIDEO", payload: videoDetails });
      dispatch({ type: "SET_NEW_VIDEOS", payload: videoDetails });
      setShowVideoModal(!showVideoModal);
    } else {
      dispatch({ type: "SET_SHOW_TOAST", payload: !showtoast });
      setMsg("Please enter all fields");
    }
  };

  return (
    <>
      {showtoast === true && <Toast msg={msg} />}
      <div class="modal-overlay flex-vt">
        <div class="modal-box  flex-vt">
          <div className="row1 flex-hz">
            <p className="upload-video-title text-md">Upload Video</p>
            <i
              class="fa fa-times modal-close-btn"
              onClick={() => setShowVideoModal(!showVideoModal)}
            ></i>
          </div>
          <div className="flex-hz">
            <p className="label">Enter YouTube Video URl</p>
            <input
              type="text"
              className="upload-video-input"
              placeholder="enter YT video URL"
              onChange={(e) =>
                setVideoDetails({
                  ...videoDetails,
                  videoId: e.target.value.split("v=")[1],
                })
              }
            />
          </div>
          <div className="flex-hz">
            <p className="label">Enter Title</p>
            <input
              type="text"
              className="upload-video-input"
              placeholder="enter title"
              onChange={(e) =>
                setVideoDetails({
                  ...videoDetails,
                  title: e.target.value,
                })
              }
            />
          </div>
          <div className="flex-hz">
            <p className="label">Enter category</p>
            <select name="category" 
              onChange={(e) =>
                setVideoDetails({
                  ...videoDetails,
                  category: e.target.value,
                })
              }
              className="upload-video-select-category"
            >
              {categories.map((category) => (
                <option value={category.categoryName}  selected="true"  >{category.categoryName}</option>
              ))}
            </select>
          </div>
          <div className="flex-hz">
            <p className="label">Enter description</p>
            <textarea
              placeholder="enter description..."
              type="text"
              className="upload-video-input"
              onChange={(e) =>
                setVideoDetails({
                  ...videoDetails,
                  description: e.target.value,
                })
              }
            />
          </div>
          <button
            className="btn btn-secondary"
            onClick={() => uploadNewVideo(videoDetails)}
          >
            Upload Video
          </button>
        </div>
      </div>
    </>
  );
};
export { UploadVideoModal };
