// App.jsx
import React from 'react'
import GameBoard from '../components/GameBoard'
import StartStopButton from '../components/StartStopButton'
import ScoreDisplay from '../components/ScoreDisplay'
import SpeedControl from '../components/SpeedControl'
import useGameData from '../hooks/useGameData'
import ResetButton from '../components/ResetButton'

const App = () => {
   const {
      currentGrid,
      isGameRunning,
      score,
      speed,
      handleTileClick,
      handleStartStopClick,
      handleSpeedChange,
   } = useGameData()

   return (
      <div className="container mx-auto mt-8 text-center flex flex-col items-center justify-evenly min-h-screen min-w-80">
         <h1 className="text-3xl font-bold">Colorful Tile Game</h1>
         <div className="flex flex-col lg:flex-row justify-center gap-12">
            <GameBoard
               grid={currentGrid}
               onTileClick={handleTileClick}
            />
            <div className="flex flex-col justify-center items-center">
               <ScoreDisplay score={score} />
               <div className="flex justify-center items-center gap-5 mt-4">
                  <StartStopButton
                     isGameRunning={isGameRunning}
                     onStartStopClick={handleStartStopClick}
                  />
                  <ResetButton />
               </div>
               <SpeedControl
                  speed={speed}
                  onSpeedChange={handleSpeedChange}
               />
            </div>
         </div>
      </div>
   )
}

export default App
