// components/SpeedControl.js
import React from 'react'

const SpeedControl = ({ speed, onSpeedChange }) => {
   const handleSpeedChange = (e) => {
      onSpeedChange(Number(e.target.value))
   }

   return (
      <div className="flex items-center justify-center mt-4">
         <label
            htmlFor="speed"
            className="mr-2 text-lg font-medium text-white"
         >
            Speed:
         </label>
         <input
            type="range"
            id="speed"
            name="speed"
            min="1"
            max="5"
            value={speed}
            onChange={handleSpeedChange}
            className="w-44 h-4 p-2 bg-gray-300 rounded-full outline-none appearance-none"
         />
         <span className="ml-2 text-lg font-medium text-white">{speed}</span>
      </div>
   )
}

export default SpeedControl
