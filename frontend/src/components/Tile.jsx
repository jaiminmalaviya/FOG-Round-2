// components/Tile.js
import React, { useState, useEffect } from 'react'

const Tile = ({ color, onClick }) => {
   const [isBlinking, setIsBlinking] = useState(false)

   useEffect(() => {
      if (isBlinking) {
         const timeoutId = setTimeout(() => {
            setIsBlinking(false)
         }, 300)

         return () => clearTimeout(timeoutId)
      }
   }, [isBlinking])

   const handleTileClick = () => {
      setIsBlinking(true)
      onClick(color)
   }

   return (
      <div
         className={`lg:w-16 lg:h-16 md:w-14 md:h-14 sm:w-12 sm:h-12 w-8 h-8 rounded-2xl ${
            isBlinking ? 'animate-blink' : ''
         }`}
         style={{ backgroundColor: color }}
         onClick={handleTileClick}
      />
   )
}

export default Tile
