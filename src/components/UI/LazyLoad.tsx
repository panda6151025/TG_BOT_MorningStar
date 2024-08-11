import React from 'react'

import '@/components/UI/animation.css'
import CredLogo from '@/assets/images/clsbox.png'

const LazyLoad: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-black">
      <header className="flex items-center justify-center w-full">
        <img
          src={CredLogo}
          className="animate-pulse duration-2000 ease-[cubic-bezier(0.4,0,0.6,1)] infinite"
          alt="logo"
        />
      </header>
    </div>
  )
}

export default LazyLoad
