// components/StartStopButton.js
import React from 'react'

const StartStopButton = ({ isGameRunning, onStartStopClick }) => {
   return (
      <button
         className="bg-blue-500 text-white py-2 px-5 m-2"
         onClick={onStartStopClick}
      >
         {isGameRunning ? 'Stop' : 'Start'}
      </button>
   )
}

export default StartStopButton
