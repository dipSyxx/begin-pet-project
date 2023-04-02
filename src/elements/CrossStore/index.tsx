import React from 'react'
import styles from './CrossStore.module.sass'
import { Typography } from '../Typography'
import { SubTitleLine } from '../SubTitleLine'
import { CrossStoreSlider } from './CrossStoreSlider'
import { SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { SliderBrend } from 'src/data/SliderBrend'
import { SliderPhotoProps } from 'src/data/SliderPhotoMassive'

export const CrossStore = () => {
  return (
    <div className={styles.crossStore}>
      <div className={styles.container}>
        <div className={styles.crossStore_title}>
          <Typography component="h3" variant="h3" marginBottom="mb-36">
            Cross store shopping in real time and cloth simulation on your own character!
          </Typography>
          <SubTitleLine widthGreen={'w_40'} />
        </div>
        <div className={styles.crossStore_slider}>
          <CrossStoreSlider>
            {SliderBrend.map(({ id, picture }: SliderBrend) => (
              <SwiperSlide key={id}>
                <Image
                  alt="slide"
                  height={157}
                  placeholder="empty"
                  priority={true}
                  src={`/crossStore/${String(picture)}.png`}
                  width={224}
                />
              </SwiperSlide>
            ))}
          </CrossStoreSlider>
        </div>
      </div>
    </div>
  )
}
