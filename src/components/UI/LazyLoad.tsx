import React from 'react'

import '@/components/UI/animation.css'

const LazyLoad: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-black">
      <header className="flex items-center justify-center w-full">
        <div className="w-10 h-10 border-8 border-gray-100 rounded-full animate-spin border-t-brown-600" />
      </header>
    </div>
  )
}

export default LazyLoad
