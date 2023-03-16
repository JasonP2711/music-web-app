import React from "react";
import { useState, useContext,createContext, useEffect } from "react";
import DataSong from "./ListSong.json";
import logo from "./logo.svg";
import "./App.css";
import TaskBar from "./components/TaskBar/TaskBar";
import MainList from "./components/MainList/MainList";
import MainMusicWeb from "./components/MainMusicWeb/MainMusicWeb";
import PlayerBar from "./components/PlayerBar/PlayerBar";
import Context from "./components/Context";
import ListSong from "./ListSong.json";


function App() {
  const [itemSong,setItemsong] = useState<any>(ListSong[0]);
  const [relateSong,setRelateSong] = useState<any>(ListSong);
  console.log("relate: " + relateSong);
  const songPlay = (song:any) =>{
    const chooseSong = ListSong.find(item=>item.id===song);
    console.log(chooseSong);
    if(chooseSong){
      setItemsong(chooseSong);
    }
    else if(!chooseSong){
      setItemsong(ListSong[0])
    }
  }

  const handleRelate = (author:any) =>{
    const relate = ListSong.filter((item)=>item.author==author);
    setRelateSong(relate);
    console.log("hello")
  }

  const handlePrevious = (song:any)=>{
    setItemsong(ListSong[song.id-1])
  }

  const handleNext = (song:any)=>{
    setItemsong(ListSong[song.id+1])
  }


  console.log("state: " + itemSong.id);
  return (
    <Context.Provider value={{itemSong,ListSong,songPlay,handlePrevious,handleNext,handleRelate,relateSong}}>
      <div>
        <TaskBar />
      </div>
      {/* tạo cột khớp với màn hình với container-fluid  */}
      <div  style={{background: "gray"}} className="container-fluid"> 
      <div className=" row ">
        <div className="col-3 text-muted bg-dark">
          <MainList />
        </div>
        <div className={`col-9 `}>
          <MainMusicWeb />
        </div>
      </div>
      </div>
      <div>
          <PlayerBar />
      </div>
    </Context.Provider>
  );
}

export default App;
