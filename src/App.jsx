import React from 'react'
import Sidebar from './components/sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { useContext } from 'react'
import { PlayerContext } from './context/PlayContext'

const App = () => {

  const {audioRef} = useContext(PlayerContext());
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio preload='auto'></audio>
    </div>
  )
}

export default App