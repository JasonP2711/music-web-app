import React from "react";
import Style from "./MainList.module.css";
import dataSong from "../../ListSong.json";

function MainList() {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.areaList}>
          <div className={Style.listSong}>
            <ul className={`overflow-scroll hover: text-info ${Style.heightList}`}>
              {dataSong.map((item, index) => (
                <li className="p-2 `">
                  <a className={`text-white-50 ${Style.itemMusic}`} href="">
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
