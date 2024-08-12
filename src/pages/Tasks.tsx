import React from 'react'
import clsbox from '@/assets/images/clsbox.png'

const Tasks: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-[100%] h-[100vh] text-yellow-400 bg-black">
      <div className="text-center w-[100%] h-[100%] pt-4 pl-2 pr-2 flex flex-col items-center justify-center">
        <div className="flex items-center justify-between px-4 mb-6 w-[100%]">
          <div className="flex items-center px-3 py-1 space-x-2 text-black bg-yellow-500 rounded-full">
            <span className="text-lg font-bold">F</span>
            <span className="font-semibold">Faerach</span>
          </div>
          <div className="px-3 py-1 text-black bg-yellow-500 rounded-full">
            <span className="font-semibold">2278643</span>
          </div>
        </div>
        <div className="flex items-center justify-center w-40 h-40 mx-auto mb-6 border border-yellow-400 rounded-full">
          <img src={clsbox} alt="Chest" className="w-24 h-24" />
        </div>
        <div className="mb-4 text-xl">Current Points: 0</div>
        <button className="px-6 py-2 text-lg text-black bg-yellow-600 rounded-full">
          Start Farming
        </button>
      </div>
    </div>
  )
}

export default Tasks
