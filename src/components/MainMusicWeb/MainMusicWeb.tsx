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
              <div>
                <ul className="d-flex list-unstyled">
                  <li className="px-5 py-3">
                    <img
                      height={130}
                      src={data[1].links.images[0].url}
                      alt=""
                      className="border border-primary rounded-circle "
                    />
                    <p className="text-center"> {data[1].author}</p>
                  </li>
                  <li className="px-5 py-3">
                    <img
                      height={130}
                      src={data[32].links.images[0].url}
                      alt={`The best of ${data[32].author}`}
                      className="border border-primary rounded-circle "
                      
                    />
                    <p className="text-center"> {data[32].author}</p>
                  </li>
                  <li className="px-5 py-3">
                    <img
                      height={130}
                      src={data[38].links.images[0].url}
                      alt=""
                      className="border border-primary rounded-circle "
                    />
                    <p className="text-center"> {data[38].author}</p>
                  </li>
                  <li className="px-5 py-3">
                    <img
                      height={130}
                      src={data[51].links.images[0].url}
                      alt=""
                      className="border border-primary rounded-circle "
                    />
                    <p className="text-center"> {data[51].author}</p>
                  </li>
                  <li className="px-5 py-3">
                    <img
                      height={130}
                      src={data[49].links.images[0].url}
                      alt=""
                      className="border border-primary rounded-circle "
                    />
                    <p className="text-center"> {data[49].author}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainMusicWeb;
