import { useState } from 'react'
import lostSongLogo from './assets/LostSongIcon.png'
import './App.css'
import ConnectionTester from './components/ConnectionTester'
import DownloadButton from './components/DownloadButton'
import AppDescription from './components/AppDescription'
import Home from './components/Home'
import { Outlet, Link } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'

function App() {

  return (
    <>
    <NavigationBar/>
    <Outlet/>
    </>
  )
}

export default App
