import { useState, useContext } from "react";
import Style from "./MainMusicWeb.module.css";
import data from "../../ListSong.json";
import { FaDownload } from "react-icons/fa";
import Context from "../Context";
interface DataType {
  id: string;
  name: string;
  author: string;
}

function MainMusicWeb() {
  const {itemSong,ListSong,songPlay} = useContext<any>(Context);
  return (
    <>
      <div>
        <div className={Style.areaList}>
          <div>
            <ul className={`overflow-scroll ${Style.heightList}`}>
              <table>
                <tbody>
                  {ListSong.map((item: any, index:any) => {
                    return (
                      <>
                        <tr onClick={()=> songPlay(item.id)} className={` ${Style.listhover}`}>
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
                          <th className={`p-3`} key={index}>
                            <a href="item"><FaDownload /></a>
                            
                          </th>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </ul>
            <div>
              <h2 className="">Artist</h2>
              <div>
                <div className={`d-flex container mx-5`}>
                <div className="mx-4">
                    <img
                      src={data[1].links.images[0].url}
                      alt=""
                      className={`border border-primary rounded-circle ${Style.hover}`}
                    />
                    <p className="text-center"> {data[1].author}</p>
                  </div>
                  <div className="mx-4" >
                    <img
                      height={130}
                      src={data[32].links.images[0].url}
                      alt={`The best of ${data[32].author}`}
                      className={`border border-primary rounded-circle ${Style.hover}`}
                      
                    />
                    <p className="text-center"> {data[32].author}</p>
                  </div>
                  <div className="mx-4" >
                    <img
                      height={130}
                      src={data[38].links.images[0].url}
                      alt=""
                      className={`border border-primary rounded-circle ${Style.hover}`}
                    />
                    <p className="text-center"> {data[38].author}</p>
                  </div>
                  <div className="mx-4">
                    <img
                      height={130}
                      src={data[51].links.images[0].url}
                      alt=""
                      className={`border border-primary rounded-circle ${Style.hover}`}
                    />
                    <p className="text-center"> {data[51].author}</p>
                  </div>
                  <div className="mx-4">
                    <img
                      height={130}
                      src={data[49].links.images[0].url}
                      alt=""
                      className={`border border-primary rounded-circle ${Style.hover}`}
                    />
                    <p className="text-center"> {data[49].author}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainMusicWeb;
