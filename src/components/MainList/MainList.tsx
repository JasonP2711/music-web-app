import React from "react";
import Style from "./MainList.module.css";
import dataSong from "../../ListSong.json";

function MainList() {
  return (
    <>
      <div className={Style.container}>
        <h2>Liên quan</h2>
        <div className={Style.areaList}>
          <div className={Style.listSong}>
            <ul style={{overflow: "scroll"}} className={` ${Style.heightList}`}>
              {dataSong.map((item, index) => (
                <li className={`p-2 ${Style.hover}`}>
                  <a className={` ${Style.itemMusic}`} href="">
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
