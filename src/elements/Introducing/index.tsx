import React from 'react'
import styles from './IntroducingSyles.module.sass'
import { Typography } from '../Typography'
import { SubTitleLine } from '../SubTitleLine'
import { Button } from '../Button'
import clsx from 'clsx'
import { IntroducingSlider } from '../IntroducingSlider'
import { SwiperSlide } from 'swiper/react'
import { SliderPhotoMassive, SliderPhotoProps } from 'src/data/SliderPhotoMassive'
import Link from 'next/link'
import Image from 'next/image'

export const Introducing = () => {
  return (
    <div className={styles.introducing_block} id="about">
      <div className={styles.container}>
        <div className={styles.introducing_inner}>
          <div className={styles.introducing_item}>
            <div className={styles.introducing_title}>
              <Typography variant="h3" colorVariant="green" marginBottom="mb-4">
                Introducing
              </Typography>
              <SubTitleLine widthGreen={'w_80'} widthGray={'w_50'} />
            </div>
            <div className={styles.introducing_text}>
              The newly designed BEGIN will completely alter the reality of fashion, individually and commercially as we
              know it. A major attribute of this mirror is to provide the user with the resources of complex fashion and
              style that many find difficult to obtain. Its main focus will be the user’s stylistic preferences and will
              then provide the user with an outfit which meets their own style while simultaneously using expert
              knowledge to ensure an outfit of pride.
              <br />
              <br />
              Because self-presentation is such a prominent element of judgement, all kinds of people are vehemently
              dressing in all kinds of ways to fit certain descriptions, norms, and anything that will allow their
              confidence to break through the cracks of self-doubt.
            </div>
            <div>
              <Button component={'button'} variant={'whiteButton'} classNameStyles={''}>
                LEARN MORE
              </Button>
            </div>
          </div>
          <div className={clsx(styles.introducing_item_slider)}>
            <div className={styles.slider}>
              <IntroducingSlider>
                {SliderPhotoMassive.map(({ id, picture, pathPicture }: SliderPhotoProps) => (
                  <SwiperSlide key={id}>
                    <Link href={`${String(pathPicture)}`}>
                      <Image
                        alt="slide"
                        height={532}
                        placeholder="empty"
                        priority={true}
                        src={`/slider/${String(picture)}.png`}
                        width={430}
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </IntroducingSlider>
            </div>
            <div className={styles.hidden_item}>
              <div className={styles.hidden_title}>
                <Typography colorVariant="green" component="h4" variant="subtitle1">
                  Lorem Ipsum
                </Typography>
              </div>
              <div className={styles.hidden_text}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
