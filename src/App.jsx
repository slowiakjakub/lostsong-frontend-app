import { useState } from 'react'
import lostSongLogo from './assets/LostSongIcon.png'
import './App.css'
import ConnectionTester from './components/ConnectionTester'
import DownloadButton from './components/DownloadButton'
import AppDescription from './components/AppDescription'
import Home from './components/Home'
import { Outlet, Link } from 'react-router-dom'

function App() {

  return (
    <>
    <div>Sidebar</div>
    <Link to={`home`}>Home</Link>
    <Link to={`about`}>About</Link>
    <Outlet/>
    </>
  )
}

export default App
