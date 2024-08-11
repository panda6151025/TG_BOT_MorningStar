import React from 'react'
import { Link } from 'react-router-dom'
import FirstImg from '@/assets/images/First.jpg'

const First: React.FC = () => {
  return (
    <>
      <Link to="/Main" className="block float-left">
        <img src={FirstImg} alt="" />
      </Link>
    </>
  )
}

export default First
