import React, { useContext, useEffect } from "react";
import Style from "./MainList.module.css";
import Context from "../Context";

function MainList() {
  const {itemSong,ListSong,songPlay,handlePrevious,handleNext,handleRelate,relateSong} = useContext<any>(Context);
  // useEffect(()=>{
  //   console.log("re-render")
  //   console.log(relateSong)
  // },[relateSong])
  return (
    <>
      <div className={Style.container}>
        <h2>Liên quan</h2>
        <div className={Style.areaList}>
          <div className={Style.listSong}>
            <ul style={{overflow: "scroll"}} className={` ${Style.heightList}`}>
              {relateSong.map((item:any, index:any) => (
                <li className={`p-2 ${Style.hover}`}  onClick={()=>songPlay(item.id)}>
                  <a className={` ${Style.itemMusic}`} >
                    {item.name} - {item.author}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainList;
