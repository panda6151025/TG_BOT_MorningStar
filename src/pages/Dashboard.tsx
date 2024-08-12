import React from 'react'
import opsbox from '@/assets/images/opebox.png'

const Dashboard: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[100%] ">
      <div className="flex flex-col items-center p-6 text-white rounded-lg">
        <div className="w-[60%] h-[60%] mb-4">
          <img
            src={opsbox}
            alt="Treasure Chest"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="mb-2 text-4xl">GA 250, 299</div>
        <button className="px-4 py-2 mb-6 text-black bg-yellow-500 rounded-md">
          Balance
        </button>
        <button className="px-4 py-2 text-black bg-yellow-500 rounded-md">
          Invite more friends to earn more
        </button>
      </div>
    </div>
  )
}

export default Dashboard
