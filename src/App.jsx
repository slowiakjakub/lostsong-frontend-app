import { useState } from 'react'
import lostSongLogo from './assets/LostSongIcon.png'
import './App.css'
import ConnectionTester from './components/ConnectionTester'
import DownloadButton from './components/DownloadButton'
import AppDescription from './components/AppDescription'
import Home from './components/Home'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
    <div>Sidebar</div>
    <Outlet/>
    </>
  )
}

export default App
