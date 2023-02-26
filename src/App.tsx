import React from 'react';
import { useState, useContext, useEffect } from 'react';
import DataSong from './ListSong.json';
import logo from './logo.svg';
import './App.css'
import TaskBar from './components/TaskBar/TaskBar';
import MainList from './components/MainList/MainList';

function App() {
  return (
   <>
   <div className=""><TaskBar/></div>
   <div className=' row '>
      <div className="col-sm-3 text-muted bg-dark"><MainList/></div>
      <div className="col-sm-8  bg-danger "><MainList/></div>
      </div>
   </>
  );
}

export default App;
