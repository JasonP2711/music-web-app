import { useState, useContext } from "react";
import Style from "./MainMusicWeb.module.css";
import data from "../../ListSong.json";
import { FaDownload } from "react-icons/fa";
interface DataType {
  id: string;
  name: string;
  author: string;
}

function MainMusicWeb() {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.areaList}>
          <div>
            <ul className={`overflow-scroll ${Style.heightList}`}>
              <table>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <>
                        <tr>
                          <th className={`p-1`} key={index}>
                            <img
                              height={40}
                              src={item.links.images[0].url}
                              alt=""
                            />
                          </th>
                          <th key={index}>{item.name}</th>
                          <th className={`p-3`} key={index}>
                            {item.author}
                          </th>
                          <th key={index}>
                            <FaDownload />
                          </th>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </ul>
            <div>
              <h2>Artist</h2>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainMusicWeb;
