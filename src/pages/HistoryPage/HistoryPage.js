import { Link, Navigate, useNavigate } from "react-router-dom";
import { HistoryVideoCard, Sidebar } from "../../components";
import { useAuth } from "../../Context/AuthProvider";
import { useData } from "../../Context/Context";
import "./HistoryPage.css";
import { clearHistory } from "../../Utility/historyService";

const HistoryPage = () => {
  const { watchedVideos } = useData();
  const { token } = useAuth();
  const { dispatch } = useData();

  return (
    <div className="main-page-container">
      <Sidebar />
      <div className="flex-vt">
        <p
          className="clear-all-btn"
          onClick={() => clearHistory(token, dispatch)}
        >
          Clear all
        </p>
        <div className="main-page flex-hz">
          {watchedVideos.length === 0 ? (
            <div className="flex-vt">
              <p className="playlist-page-text">
                You haven't watched any videos yet .
              </p>
              <Link to="/videos" className="links">
                <button className="btn btn-secondary playlist-page-link">
                  Get started
                </button>
              </Link>
            </div>
          ) : (
            <>
              {watchedVideos.map((video) => {
                return (
                  <>
                    <HistoryVideoCard videoItem={video} />
                  </>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export { HistoryPage };
