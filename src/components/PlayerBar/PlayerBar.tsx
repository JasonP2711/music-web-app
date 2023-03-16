import { useState, useContext } from "react";
import Style from './PlayerBar.module.css'
import AudioPlayer from 'react-h5-audio-player';
import data from '../../ListSong.json'
import Context from "../Context";

function PlayerBar(){
    const {itemSong,ListSong,songPlay,handlePrevious,handleNext} = useContext<any>(Context);
    return(
        <>
            <div className={Style.container}>
            <div style={{width: '400px', display: 'flex'}}>
                <div></div>
            <img className={`pl-0 m-2 rounded-circle `} src={itemSong.links.images[1].url}  width={60} /> <div className={`m-3 h5`}>{itemSong.name}</div> 
            <div className={`m-3 h5`}>{itemSong.author}</div>
            </div>
                <div className="d-inline ">
                <AudioPlayer 
                src={itemSong.url}
                    style={{ height: '10vh', background:'#212529',width: '1100px'}}
                    layout="horizontal"
                    showSkipControls={true}
                    showJumpControls={true} 
                    onClickPrevious = {()=>handlePrevious(itemSong)}
                    onClickNext = {()=>handleNext(itemSong)}
                  />
                  
                </div>
                
            </div>
        </>
    )
}

export default PlayerBar;