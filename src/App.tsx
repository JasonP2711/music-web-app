import React from "react";
import { useState, useContext, useEffect } from "react";
import DataSong from "./ListSong.json";
import logo from "./logo.svg";
import "./App.css";
import TaskBar from "./components/TaskBar/TaskBar";
import MainList from "./components/MainList/MainList";
import MainMusicWeb from "./components/MainMusicWeb/MainMusicWeb";
import PlayerBar from "./components/PlayerBar/PlayerBar";

function App() {
  return (
    <>
      <div className="">
        <TaskBar />
      </div>
      {/* tạo cột khớp với màn hình với container-fluid  */}
      <div className="container-fluid"> 
      <div className=" row ">
        <div className="col-3 text-muted bg-dark">
          <MainList />
        </div>
        <div className="col-9  bg-danger ">
          <MainMusicWeb />
        </div>
      </div>
      </div>
      <div>
          <PlayerBar />
      </div>
    </>
  );
}

export default App;
