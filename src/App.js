import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { useQuery } from "react-query";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import List_user from "./pages/list/list_users/List_user";
import List_movie from "./pages/list/list_movies/List_movie";
import axios from "axios";
import React, { useState } from "react";

export const userRows = [];

function App() {
  const { darkMode } = useContext(DarkModeContext);

  //get movies API
  async function fetchUser() {
    const { data } = await axios.get(
      "https://bts.bdlt.buzz/api/movie"
    );
    
    data.map((item) =>{
    userRows.push(
    {
      id: item._id,
      name: item.name,
      img: item.image,
      status: "active",
      director: item.director,
      duration: item.duration,
      rated: item.rated
      })
     },)
    
    return userRows;
  }
  const { data, error, isError, isLoading } = useQuery("getUser", fetchUser);
  // const setValue = () => {
  //   movieValue = data
  // }
  return (
    
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List_user />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List_movie />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ul>
        {data &&
          data.length > 0 &&
          data.map((userRows, index) => (
            <li key={userRows.id}>{userRows.name}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
