export const getSortedVideos = (videos, sortByLatest) => {
  if (sortByLatest === true) {
    return [...videos].sort((a, b) => {
      return new Date(b["uploaded"]) - new Date(a["uploaded"]);
    });
  }
  return videos;
};

export const getFilteredVideos = (videos, selectedCategory) => {
  let filteredVideos = [...videos];
  if (selectedCategory !== null) {
    return filteredVideos.filter(
      (video) => video.category === selectedCategory
    );
  }
  return filteredVideos;
};
