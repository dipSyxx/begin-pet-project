import React, { ReactNode, useRef, useState } from 'react'
import styles from './SliderStylesCrossStore.module.sass'
// Import Swiper React components
import { Swiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'

// import required modules
import { Autoplay, EffectCoverflow } from 'swiper'

type CrossStoreSliderProp = {
  children: ReactNode
}

export const CrossStoreSlider = ({ children }: CrossStoreSliderProp) => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={70}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        speed={2000}
        className={styles.crossStore_slider}
      >
        {children}
      </Swiper>
    </>
  )
}
