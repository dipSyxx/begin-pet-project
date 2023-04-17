import React, { useContext } from 'react'
import styles from './CrossStore.module.sass'
import { MTypography, Typography } from '../Typography'
import { MSubTitleLine, SubTitleLine } from '../SubTitleLine'
import { CrossStoreSlider } from './CrossStoreSlider'
import { SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { SliderBrend } from 'src/data/SliderBrend'
import { ThemeContext } from 'src/pages'
import { motion } from 'framer-motion'

export const CrossStore = () => {
  const { theme } = useContext(ThemeContext)

  const textAnimations = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
  }

  return (
    <motion.div
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      className={styles.crossStore}
      id="shopping"
    >
      <div className={styles.container}>
        <div className={styles.crossStore_title}>
          <MTypography
            variants={textAnimations}
            custom={1}
            component="h3"
            variant="h3"
            marginBottom="mb-36"
            colorVariant={theme ? 'black' : ''}
          >
            Cross store shopping in real time and cloth simulation on your own character!
          </MTypography>
          <MSubTitleLine variants={textAnimations} custom={4} widthGreen={'w_40'} />
        </div>
        <motion.div variants={textAnimations} custom={3} className={styles.crossStore_slider}>
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
        </motion.div>
      </div>
    </motion.div>
  )
}
