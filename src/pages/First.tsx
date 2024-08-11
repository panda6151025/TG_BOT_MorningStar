import React from 'react'
import { Link } from 'react-router-dom'
import FirstImg from '@/assets/images/First.jpg'

const First: React.FC = () => {
  return (
    <>
      <Link to="/Main" className="block float-left">
        <img
          src={FirstImg}
          alt=""
          className="w-full h-full sm:w-screen sm:h-screen"
        />
      </Link>
    </>
  )
}

export default First
