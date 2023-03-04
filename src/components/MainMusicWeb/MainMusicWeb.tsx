import {useState, useContext} from "react";
import Style from './MainMusicWeb.module.css'
import data from '../../ListSong.json';
interface MusicProps{

}
function MainMusicWeb(){
   

    return(
        <>
            <div className={Style.container}>
                <div className={Style.areaList}>
                    <div>
                        <ul>
                        {
                            data.map((item,id)=>{
                                if(id<10){
                                    return(
                                        <li className={`h4 list-unstyled m-3`}> 
                                            <a className={`text-decoration-none ${Style.list}  `} href="">
                                                {item.name}
                                                {item.author}
                                            </a>
                                            </li>
                                    )
                                }
                                return(
                                    null
                                )
                            })
                        }
                        </ul>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainMusicWeb;