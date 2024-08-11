import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Carousel from '@/components/UI/Carousel/CarouselContainer'
import Slide from '@/components/UI/Carousel/Slide'
import WingsImg from '@/assets/images/wings.png'
import opeboxImg from '@/assets/images/opebox.png'
import clsboxImg from '@/assets/images/clsbox.png'
import linkimg from '@/assets/images/linkimg.png'
import tickimg from '@/assets/images/tickimg.png'

import tgImg from '@/assets/images/tgimg.png'

export type SlideType = {
  id: number
  image: any
  title: string
  content: any
}

const slides: Array<SlideType> = [
  {
    id: 0,
    image: clsboxImg,
    title: 'Start farming 6 hours and earn points',
    content: [],
  },
  {
    id: 1,
    image: '',
    title: 'Complete tasks and earn more!',
    content: [
      {
        id: 1,
        image: WingsImg,
        title: 'Daily check in',
        bonus: 250,
        symbol: 1,
      },
      {
        id: 2,
        image: opeboxImg,
        title: 'Visit CryptoRank.io',
        bonus: 100,
        symbol: 2,
      },
      {
        id: 3,
        image: tgImg,
        title: 'Like Latest Post',
        bonus: 250,
        symbol: 1,
      },
    ],
  },
  {
    id: 2,
    image: '',
    title: 'Receive %from your buddies and even their buddies',
    content: [
      {
        id: 1,
        image: linkimg,
        title: 'Send A Link',
      },
      {
        id: 2,
        image: tickimg,
        title: 'Link is copied',
      },
    ],
  },
]

export type CatagoryType = {
  id: number
  image: string
  title: String
  link: string
}

// const Catagories: Array<CatagoryType> = [
//   {
//     id: 0,
//     image: tickimg,
//     title: 'Task',
//     link: '',
//   },
// ]

const Onboarding: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slideRows = slides.map((slide: any, index: number) => {
    return (
      <Slide
        key={index}
        slide={slide}
        index={index}
        currentSlide={currentSlide}
      />
    )
  })

  return (
    <div className="h-[100vh]">
      <div className="h-[90vh]">
        <Carousel
          slides={slideRows}
          setCurrentSlide={setCurrentSlide}
          currentSlide={currentSlide}
        />
      </div>
      <div className="h-[10vh] flex justify-around mb-4">
        <Link
          to={`/Main`}
          className="bg-black text-white  border-solid border text-center rounded-[20px] h-[46px] w-[20%] block py-[15px] mt-2"
        >
          Farming
        </Link>
        <Link
          to={`/Main`}
          className="bg-black text-white border-solid border text-center rounded-[20px] h-[46px] w-[20%] block py-[15px] mt-2"
        >
          Task
        </Link>
        <Link
          to={`/Main`}
          className="bg-black text-white border-solid border text-center rounded-[20px] h-[46px] w-[20%] block py-[15px] mt-2"
        >
          Buddy
        </Link>
        <Link
          to={`/Main`}
          className="bg-black text-white  border-solid border text-center rounded-[20px] h-[46px] w-[27%] block py-[15px] mt-2"
        >
          Dashboard
        </Link>
      </div>
    </div>
  )
}

export default Onboarding
