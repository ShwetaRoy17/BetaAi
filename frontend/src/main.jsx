import React from "react";
import ReactDOM from "react-dom/client";
import store  from "./store/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";

// pages import
import Leagues from "./pages/leagues.jsx";
import Root from "./layout.jsx";
import Matches from "./pages/MatchesPage.jsx";
import Main from "./pages/MatchPag.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import "./index.css";
import Team from "./pages/Team.jsx";
import Player from "./pages/Player.jsx";
import LeagueStats from "./pages/LeagueStats.jsx";
import LeagueMatches from "./pages/LeagueMatches.jsx";
import ErrorPage from "./pages/ErrorPage.jsx"


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
