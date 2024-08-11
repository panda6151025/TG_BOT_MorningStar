import React from 'react'
import type { SlideType } from '@/pages/Onboarding'

export type SlideProps = {
  slide: SlideType
  index: number
  currentSlide: number
}

const Slide: React.FC<SlideProps> = ({
  slide,
  currentSlide,
  index,
}: SlideProps) => {
  return (
    <div
      className={`h-[70vh] flex flex-col justify-center items-center pb-6 mt-16 ${
        currentSlide === index ? 'active' : 'inactive'
      }`}
    >
      <h3 className="h-[20%] mt-10 text-black text-[22px] leading-8 font-extrabold text-center text-white">
        {slide.title}
      </h3>
      <div className=" h-[80%] w-full px-8 overflow-auto">
        {index === 0 && <img className="w-full h-full" src={slide.image} />}
        {index === 1 &&
          (Array.isArray(slide.content) ? slide.content : [slide.content]).map(
            (item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-[rgb(50,41,24)] flex pt-2 pl-2 pb-2 pr-2 mt-2 mb-2"
              >
                <img src={item.image} alt="" className="w-[10%]" />
                <div className="w-[80%] flex flex-col justify-center text-white pl-4">
                  <span>{item.title}</span>
                  {item.bonus != 0 && (
                    <span className="pl-4 text-[#c3b18a]">
                      {'+' + item.bonus}
                    </span>
                  )}
                </div>
                {item.symbol === 1 && (
                  <div className="flex items-center justify-center w-[10%]">
                    <span className="text-2xl text-white">&#62;</span>
                  </div>
                )}
                {item.symbol === 2 && (
                  <div className="flex items-center justify-center w-[20%] rounded-2xl bg-[rgb(229,174,67)]">
                    <span>
                      <b>claim</b>
                    </span>
                  </div>
                )}
              </div>
            ),
          )}
        {index === 2 && (
          <div className=" rounded-lg bg-[rgb(27,26,22)] pt-4 pl-3 pr-3 pb-2">
            <span className="text-white">Invite Friend</span>
            {(Array.isArray(slide.content)
              ? slide.content
              : [slide.content]
            ).map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-[rgb(50,41,24)] flex pt-2 pl-2 pb-2 pr-2 mt-2 mb-2"
              >
                <img src={item.image} alt="" className="w-[10%]" />
                <div className="w-[80%] flex flex-col justify-center text-white pl-4">
                  <span>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Slide
