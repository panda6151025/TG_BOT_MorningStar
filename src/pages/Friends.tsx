import React from 'react'

const Friends: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[100%] w-[100%]">
      <div className="p-6 text-white  rounded-lg w-[100%] h-[70%]">
        <h2 className="mb-4 text-lg font-bold">Invite Buddies & Earn More</h2>
        <div className="mb-6">
          <h3 className="text-sm font-semibold">How it works</h3>
          <ol className="pl-5 space-y-2 text-sm text-gray-300 list-decimal">
            <li>
              <span className="text-white">Share your Invitation link</span>
              <br />
              Get +500 GA points
            </li>
            <li>
              <span className="text-white">
                Your friends join GuardianAngel
              </span>
              <br />
              And start farming points
            </li>
            <li>
              <span className="text-white">Score 10% from buddies</span>
              <br />
              Enjoy the Extra points
            </li>
          </ol>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg">
          <h3 className="mb-2 text-sm font-semibold">Invite friends</h3>
          <div className="flex flex-col space-y-2">
            <button className="px-4 py-2 font-semibold text-black bg-yellow-600 rounded-lg">
              Send a link
            </button>
            <button className="px-4 py-2 font-semibold text-black bg-yellow-600 rounded-lg">
              Copy a link
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Friends
