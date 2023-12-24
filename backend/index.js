// server/server.js
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())

const generateInitialGrid = () => {
   const initialGrid = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => 'gray'))

   // Randomly select 18 positions for blue tiles
   const blueTilePositions = getRandomPositions(20)

   // Set blue tiles at the selected positions
   blueTilePositions.forEach(([row, col]) => {
      initialGrid[row][col] = 'blue'
   })

   return initialGrid
}

// Function to generate an array of random positions
const getRandomPositions = (count) => {
   const positions = []

   for (let i = 0; i < count; i++) {
      const row = Math.floor(Math.random() * 10)
      const col = Math.floor(Math.random() * 10)
      positions.push([row, col])
   }

   return positions
}

app.get('/', (req, res) => {
   res.json({ message: 'Hello World!' })
})

app.get('/api/grid', (req, res) => {
   const initialGrid = generateInitialGrid()
   res.json(initialGrid)
})

app.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`)
})
