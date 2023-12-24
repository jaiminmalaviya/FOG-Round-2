// useGameData.js
import { useState, useEffect, useCallback } from 'react'
import api from '../services/api'

const useGameData = () => {
   const [originalGrid, setOriginalGrid] = useState([])
   const [currentGrid, setCurrentGrid] = useState([])
   const [isGameRunning, setIsGameRunning] = useState(false)
   const [score, setScore] = useState(0)
   const [speed, setSpeed] = useState(1)
   let column = 0
   let incrementing = true

   useEffect(() => {
      const fetchInitialGrid = async () => {
         try {
            const data = await api.getInitialGrid()
            const updatedGrid = data.map((row) => [...row])

            for (let i = 0; i < 10; i++) {
               updatedGrid[i][0] = 'red'
               updatedGrid[i][1] = 'red'
            }

            setOriginalGrid(data)
            setCurrentGrid(updatedGrid)
         } catch (error) {
            console.error('Error fetching initial grid:', error)
         }
      }

      fetchInitialGrid()
   }, [])

   const moveRedLines = useCallback(() => {
      setCurrentGrid(() => {
         const newGrid = originalGrid.map((row) => [...row])

         for (let j = 0; j < 10; j++) {
            for (let i = 0; i < 10; i++) {
               if (j === column || j === column + 1) {
                  newGrid[i][j] = 'red'
               }
            }
         }

         return newGrid
      })

      if (incrementing) {
         column++
         if (column > 7) {
            incrementing = false
         }
      } else {
         column--
         if (column === 0) {
            incrementing = true
         }
      }
   }, [column, incrementing, originalGrid])

   let intervalId

   useEffect(() => {
      if (isGameRunning) {
         intervalId = setInterval(moveRedLines, 250 - (speed - 1) * 50)
      }

      return () => clearInterval(intervalId)
   }, [isGameRunning, moveRedLines, speed])

   const handleTileClick = useCallback(
      (color) => {
         if (isGameRunning) {
            if (color === 'blue') {
               setScore((prevScore) => prevScore + 10)
            } else if (color === 'red') {
               setScore((prevScore) => prevScore - 10)
            }
         }
      },
      [isGameRunning]
   )

   const handleStartStopClick = useCallback(() => {
      setIsGameRunning((prevIsGameRunning) => !prevIsGameRunning)
      setScore(0)
   }, [])

   const handleSpeedChange = useCallback((newSpeed) => {
      setSpeed(newSpeed)
   }, [])

   return {
      currentGrid,
      isGameRunning,
      score,
      speed,
      handleTileClick,
      handleStartStopClick,
      handleSpeedChange,
   }
}

export default useGameData
