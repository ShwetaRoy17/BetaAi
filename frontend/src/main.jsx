import React from "react";
import ReactDOM from "react-dom/client";
import store  from "./store/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";

// pages import
import Leagues from "./pages/leagues.jsx";
import Root from "./layout.jsx";
import Matches from "./pages/matchespage.jsx";
import Main from "./pages/matchpage.jsx";
import Home from "./pages/home.jsx";
import Profile from "./pages/profile.jsx";
import "./index.css";
import Team from "./pages/team.jsx";
import Player from "./pages/player.jsx";
import LeagueStats from "./pages/leaguestats.jsx";
import LeagueMatches from "./pages/leaguematches.jsx";
import ErrorPage from "./pages/errorpage.jsx"


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route index element={<Home />} />
     <Route path='home' element={<Home/>}></Route>
      <Route path='leagues' element ={<Leagues/>}></Route>
      <Route path='matches' element ={<Matches/>}></Route>
      <Route path="profile" element={<Profile/>}></Route>
      <Route path="league-stats/:season_id" element={<LeagueStats/>}></Route>
      <Route path="match-stats/:season_id" element={<LeagueMatches/>}></Route>
      <Route path="search/team/:team_id" element={<Team/>}></Route>
      <Route path="search/player/:player_id" element={<Player/>}></Route>
     <Route path='match/:matchId' element={<Main/>}></Route>
     <Route path='*' element={<ErrorPage/>} />

  </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
