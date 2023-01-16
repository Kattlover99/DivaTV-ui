import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import {
  Homepage,
  Signin,
  Signup,
  VideoListingpage,
  VideoPage,
  Playlistpage,
  SinglePlaylistPage,
  WatchLater,
  LikedVideosPage,
  UploadedVideos,
  UserProfile,
} from "./pages/index.js";
import "./App.css";
import { HistoryPage } from "./pages/HistoryPage/HistoryPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/videos" element={<VideoListingpage />} />
        <Route path="/video/:videoId" element={<VideoPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/playlists" element={<Playlistpage />} />
        <Route path="/playlists/:playlistId" element={<SinglePlaylistPage />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/likedvideos" element={<LikedVideosPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/uploadedVideos" element={<UploadedVideos />} />
        <Route path="userProfile" element={<UserProfile/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
