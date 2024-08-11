import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Carousel from '@/components/UI/Carousel/CarouselContainer'
import Slide from '@/components/UI/Carousel/Slide'
import WingsImg from '@/assets/images/wings.png'
import opeboxImg from '@/assets/images/opebox.png'
import clsboxImg from '@/assets/images/clsbox.png'
import linkimg from '@/assets/images/linkimg.png'
import tickimg from '@/assets/images/tickimg.png'
import taskimg from '@/assets/images/taskimg.png'
import farmimg from '@/assets/images/farmingimg.png'
import friendimg from '@/assets/images/friendimg.png'
import dashboardimg from '@/assets/images/dashboardimg.png'

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
      <div className="h-[80vh]">
        <Carousel
          slides={slideRows}
          setCurrentSlide={setCurrentSlide}
          currentSlide={currentSlide}
        />
      </div>
      <div className="h-[20vh] flex justify-around pt-4 pb-2 pl-2 pr-2">
        <div className="h-[80%] w-[23%] flex flex-col justify-center	items-center border-dashed border-2 border-indigo-600 ">
          <img src={farmimg} className="h-[50%] w-[60%] "></img>
          <span className="text-sm text-white hover:text-indigo-800">
            Farming
          </span>
        </div>
        <div className="h-[80%] w-[23%] flex flex-col justify-center items-center border-dashed border-2 border-indigo-600">
          <img src={taskimg} className="h-[50%] w-[60%] "></img>
          <span className="text-sm text-white hover:text-indigo-800">
            Tasks
          </span>
        </div>
        <div className="h-[80%] w-[23%] flex flex-col justify-center items-center border-dashed border-2 border-indigo-600">
          <img src={friendimg} className="h-[50%] w-[60%] "></img>
          <span className="text-sm text-white hover:text-indigo-800">
            Friends
          </span>
        </div>
        <div className="h-[80%] w-[23%] flex flex-col justify-center items-center border-dashed border-2 border-indigo-600">
          <img src={dashboardimg} className="h-[50%] w-[60%] "></img>
          <span className="text-sm text-white hover:text-indigo-800">
            Dashboard
          </span>
        </div>
      </div>
    </div>
  )
}

export default Onboarding
