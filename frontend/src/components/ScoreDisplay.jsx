// components/ScoreDisplay.js
import React from 'react'

const ScoreDisplay = ({ score }) => {
   return (
      <div className="text-center font-bold text-xl">Score: {score >= 0 ? `+${score}` : score}</div>
   )
}

export default ScoreDisplay
