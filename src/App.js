import { BrowserRouter, Routes, Route } from "react-router-dom";
import Anime from "./Component/AnimePoster";
import AnimeDetails from "./Component/AnimeDetails";
import Header from "./Component/Header";
import Watchlist from "./Component/WatchList/watchlist";



const App = ()=> {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="" element={<Anime />} />
      <Route path="/:animeId" element={<AnimeDetails />} />
      <Route path="/watchlist" element={<Watchlist />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

