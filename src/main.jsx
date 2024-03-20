import React from "react";
import ReactDOM from "react-dom/client";
import Leagues from "./components/leagues.jsx";
import Root from "./layout.jsx";
import Matches from "./components/matches.jsx";
import Home from "./components/Home.jsx";
import "./index.css";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Root />}>
     <Route path='' element={<Home/>}></Route>
      <Route path='leagues' element ={<Leagues/>}></Route>
      <Route path='matches' element ={<Matches/>}></Route>
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
