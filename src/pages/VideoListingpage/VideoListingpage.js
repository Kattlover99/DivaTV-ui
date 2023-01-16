import {
  faArrowDownShortWide,
  faSort,
  faSortAlphaDownAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Sidebar, VideoCard } from "../../components";
import { useData } from "../../Context/Context";
import {
  getFilteredVideos,
  getSortedVideos,
} from "../../Utility/utilityFunctions";
import "./VideoListingpage.css";

const VideoListingpage = () => {
  const { categories, videos, sortByLatest, selectedCategory, dispatch } =
    useData();
  const sortedVideos = getSortedVideos(videos, sortByLatest);
  const filteredVideos = getFilteredVideos(sortedVideos, selectedCategory);
  return (
    <div className="main-page-container">
      <Sidebar />
      <div className="main-page flex-vt">
        <div className="filter-container flex-hz">
          <p
            className="category-item"
            onClick={() =>
              dispatch({ type: "SET_SELECTED_CATEGORY", payload: null })
            }
          >
            all
          </p>{" "}
          {categories.map((category) => (
            <p
              onClick={() =>
                dispatch({
                  type: "SET_SELECTED_CATEGORY",
                  payload: category.categoryName,
                })
              }
              className="category-item"
            >
              {category.categoryName}
            </p>
          ))}
        </div>
        <div className="flex-hz">
          <FontAwesomeIcon
            className="sort-icon"
            icon={faArrowDownShortWide}
          ></FontAwesomeIcon>{" "}
          {sortByLatest ? (
            <>
              <p
                onClick={() =>
                  dispatch({
                    type: "SET_SORT_BY_LATEST",
                    payload: !sortByLatest,
                  })
                }
                className="sort-by"
              >
                Clear sort
              </p>
            </>
          ) : (
            <>
              <p
                onClick={() =>
                  dispatch({
                    type: "SET_SORT_BY_LATEST",
                    payload: !sortByLatest,
                  })
                }
                className="sort-by"
              >
                Sort By latest
              </p>
            </>
          )}
        </div>
        <div className="video-listing-container flex-hz flex-wrap">
          {filteredVideos.map((videoItem) => {
            return <VideoCard videoItem={videoItem} />;
          })}
        </div>
      </div>
    </div>
  );
};
export { VideoListingpage };
