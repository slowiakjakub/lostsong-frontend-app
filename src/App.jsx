import { useState } from 'react'
import lostSongLogo from './assets/LostSongIcon.png'
import './App.css'
import ConnectionTester from './components/ConnectionTester'
import DownloadButton from './components/DownloadButton'
import AppDescription from './components/AppDescription'

function App() {

  return (
    <>
      <div>
        <img src={lostSongLogo} className="logo" alt="LostSong logo" />
      </div>
      <h1>LostSong!</h1>
      <AppDescription/>
      <DownloadButton/>
    </>
  )
}

export default App
