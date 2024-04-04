import React from "react";
import ReactDOM from "react-dom/client";
import Leagues from "./pages/leagues.jsx";
import Root from "./layout.jsx";
import Matches from "./pages/matches.jsx";
import Main from "./pages/Main.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import "./index.css";
import store  from "./store/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";
import League from "./components/League.jsx";
import Team from "./components/Team.jsx";
import Player from "./components/player.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Root />}>
     <Route path='/matches/:matchid' element={<Main/>}></Route>
     <Route path='home' element={<Home/>}></Route>
      <Route path='leagues' element ={<Leagues/>}></Route>
      <Route path='matches' element ={<Matches/>}></Route>
      <Route path="profile" element={<Profile/>}></Route>
      <Route path="search/team/:id" element={<Team/>}></Route>
      <Route path="search/player/:id" element={<Player/>}></Route>
      <Route path="search/league/:id" element={<League/>}></Route>

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
