import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

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
    <div className="h-[100%] w-[100%]">
      <Carousel
        slides={slideRows}
        setCurrentSlide={setCurrentSlide}
        currentSlide={currentSlide}
      />
    </div>
  )
}

export default Onboarding
