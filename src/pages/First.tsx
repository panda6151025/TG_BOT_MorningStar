import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FirstImg from '@/assets/images/First.jpg'

const First: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/Barse')
    }, 1000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <>
      <div
        className="h-screen "
        style={{
          backgroundImage: `url(${FirstImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-10 h-10 border-8 border-gray-100 rounded-full animate-spin border-t-brown-600" />
        <div className="absolute bottom-[15%] text-center w-[100%] ">
          <p className="text-[#ebbe30] font-cursive drop-shadow-lg text-[30px] bg-[#3f3f46]">
            <b>HamSter KomBat Token</b>
          </p>
          {/* <p className="text-white">Will be launched</p>
          <p className="text-white font-fantasy text-[30px]">
            <b>ON TON</b>
          </p>
          <p className="text-white">stay turned</p>
          <p className="text-white">More Info official channels</p> */}
        </div>
      </div>
    </>
  )
}

export default First
