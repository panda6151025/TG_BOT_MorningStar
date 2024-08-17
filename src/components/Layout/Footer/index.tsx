import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  FaBitcoin,
  FaUserFriends,
  FaTasks,
  FaGamepad,
  FaCoins,
  FaExchangeAlt,
} from 'react-icons/fa'

const Footer: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(-1)
  const navigate = useNavigate()

  const handleClick = (index: number, name: String) => {
    setActiveIndex(index)
    navigate('/' + name)
  }

  return (
    <div className="grid grid-cols-6 gap-1 pt-1 pb-2 pl-1 pr-1 bg-gray-800 rounded-lg">
      <div
        className={`flex flex-col items-center w-auto p-1 text-white rounded-lg ${
          activeIndex === 0 ? 'bg-black text-black' : 'bg-gray'
        }`}
        onClick={() => handleClick(0, 'Barse')}
      >
        <FaExchangeAlt className="mb-1 text-2xl" />
        <span className="text-[10px]">Barse</span>
      </div>
      <div
        className={`flex flex-col items-center w-auto p-1 text-white rounded-lg ${
          activeIndex === 1 ? 'bg-black text-black' : 'bg-gray'
        }`}
        onClick={() => handleClick(1, 'Mining')}
      >
        <FaBitcoin className="mb-1 text-2xl" />
        <span className="text-[10px]">Mining</span>
      </div>
      <div
        className={`flex flex-col items-center w-auto p-1 text-white rounded-lg ${
          activeIndex === 2 ? 'bg-black text-black' : 'bg-gray'
        }`}
        onClick={() => handleClick(2, 'Playground')}
      >
        <FaGamepad className="mb-1 text-2xl" />
        <span className="text-[10px]">Playground</span>
      </div>
      <div
        className={`flex flex-col items-center w-auto p-1 text-white rounded-lg ${
          activeIndex === 3 ? 'bg-black text-black' : 'bg-gray'
        }`}
        onClick={() => handleClick(3, 'Friends')}
      >
        <FaUserFriends className="mb-1 text-2xl" />
        <span className="text-[10px]">Friends</span>
      </div>
      <div
        className={`flex flex-col items-center w-auto p-1 text-white rounded-lg ${
          activeIndex === 4 ? 'bg-black text-black' : 'bg-gray'
        }`}
        onClick={() => handleClick(4, 'Aufugaben')}
      >
        <FaTasks className="mb-1 text-2xl" />
        <span className="text-[10px]">Aufgaben</span>
      </div>
      <div
        className={`flex flex-col items-center w-auto p-1 text-white rounded-lg ${
          activeIndex === 5 ? 'bg-black text-black' : 'bg-gray'
        }`}
        onClick={() => handleClick(5, 'AirDrop')}
      >
        <FaCoins className="mb-1 text-2xl" />
        <span className="text-[10px]">AirDrop</span>
      </div>
    </div>
  )
}

export default Footer
