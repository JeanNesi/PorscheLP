'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
import Image from 'next/image'
import { img } from '@/assets'

export function Carousel() {
  const slides = [img.cover1, img.cover2, img.cover3, img.cover4, img.cover5]

  return (
    <div className={`h-[60vh] w-full`}>
      <Swiper pagination={true} modules={[Pagination]}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide}
              alt={`Cover ${index + 1}`}
              className="aspect-square object-center"
              objectFit="cover"
            />

            {!index && (
              <h2 className="absolute bottom-24 left-14 z-10 max-w-[454px] text-start text-4xl font-bold uppercase text-white">
                feel the passion of driving a classic{' '}
              </h2>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
