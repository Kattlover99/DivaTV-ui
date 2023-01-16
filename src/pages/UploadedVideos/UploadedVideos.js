import { useState } from "react";
import { Sidebar, VideoCard } from "../../components";
import { useData } from "../../Context/Context";
import "./UploadedVideos.css";
import { UploadVideoModal } from "../../components/UploadVideoModal/UploadVideoModal";

const UploadedVideos = () => {
  const { newVideos } = useData();
  const [showVideoModal, setShowVideoModal] = useState(false);
  const openModal = () => {
    setShowVideoModal(!showVideoModal);
  };

  return (
    <div className="main-page-container">
      <Sidebar />
      <div className="main-page flex-vt">
        <div className="column1  flex-hz">
          <div className="flex-vt">
            <p className="text-md">Uploaded Videos</p>
            <p className="text-sm">0 videos</p>
          </div>
          <button className="btn btn-primary" onClick={openModal}>
            Upload Video
          </button>
          {showVideoModal && (
            <UploadVideoModal
              showVideoModal={showVideoModal}
              setShowVideoModal={setShowVideoModal}
            />
          )}
        </div>
        <div className="flex-hz">
          {newVideos.map((video) => (
            <VideoCard videoItem={video} />
          ))}
        </div>
      </div>
    </div>
  );
};
export { UploadedVideos };
