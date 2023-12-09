import { useState } from 'react'
import lostSongLogo from './assets/LostSongIcon.png'
import './App.css'
import ConnectionTester from './components/ConnectionTester'
import DownloadButton from './components/DownloadButton'
import AppDescription from './components/AppDescription'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={lostSongLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>LostSong!</h1>
      <AppDescription/>
      <DownloadButton/>
    </>
  )
}

export default App
