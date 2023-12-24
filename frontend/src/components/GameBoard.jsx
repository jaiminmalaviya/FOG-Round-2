// components/GameBoard.js
import React from 'react'
import Tile from './Tile'

const GameBoard = ({ grid, onTileClick }) => {
   return (
      <div className="grid grid-cols-10 gap-0.5 w-fit my-5">
         {grid.map((row, rowIndex) =>
            row.map((color, colIndex) => (
               <Tile
                  key={`${rowIndex}-${colIndex}`}
                  color={color}
                  onClick={onTileClick}
               />
            ))
         )}
      </div>
   )
}

export default GameBoard
