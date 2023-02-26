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
      <TaskBar/>
      <MainList/>
   </>
  );
}

export default App;
