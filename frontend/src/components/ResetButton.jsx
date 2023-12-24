import React from 'react'

const ResetButton = () => {
   const handleResetClick = () => {
      window.location.reload() // Reload the page
   }

   return (
      <button
         className="bg-blue-500 text-white px-4 py-2  hover:bg-blue-600 focus:outline-none"
         onClick={handleResetClick}
      >
         Reset
      </button>
   )
}

export default ResetButton
