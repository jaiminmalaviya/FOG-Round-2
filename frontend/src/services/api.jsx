// services/api.js
const BASE_URL = 'https://fog-round-2-backend.vercel.app' // Replace with your backend server URL

const api = {
   async getInitialGrid() {
      try {
         const response = await fetch(`${BASE_URL}/api/grid`)
         if (!response.ok) {
            throw new Error('Failed to fetch initial grid')
         }

         return response.json()
      } catch (error) {
         console.error('Error in getInitialGrid:', error)
         throw error
      }
   },
}

export default api
