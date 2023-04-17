import React, { useContext } from 'react'
import styles from './ClothingStyles.module.sass'
import { MTypography, Typography } from '../Typography'
import { MSubTitleLine, SubTitleLine } from '../SubTitleLine'
import { Button, MButton } from '../Button'
import { ThemeContext } from 'src/pages'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse'

export const Clothing = () => {
  const { theme } = useContext(ThemeContext)

  const textAnimations = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.5 },
    }),
  }

  const imgAnimations = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.5 },
    }),
  }

  return (
    <MouseParallaxContainer
      globalFactorX={0.2}
      globalFactorY={0.2}
      containerStyle={{ overflow: 'unset' }}
      className={styles.clothing_side_img}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className={clsx(styles.clothing, theme ? styles.clothing_light : '')}
        id="specs"
      >
        <div className={styles.container}>
          <div className={styles.clothing_inner}>
            <div className={styles.clothing_side}>
              <div className={styles.clothing_title}>
                <MTypography variants={textAnimations} custom={1} component="h1" variant="h1" marginBottom="mb-24">
                  3D clothing simulation on user-designed metahuman
                </MTypography>
                <MSubTitleLine variants={textAnimations} custom={1.5} widthGreen="w_157" widthGray="w_90" />
              </div>
              <div className={styles.clothing_text}>
                <MTypography variants={textAnimations} custom={2} component="p" variant="subtitle2">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                  in hendrerit in vulputate velit esse molestie
                </MTypography>
              </div>
              <div className={styles.clohing_btn}>
                <MButton
                  variants={textAnimations}
                  custom={2.5}
                  component="button"
                  variant="whiteButtonWithBlack"
                  classNameStyles="button"
                >
                  DISCOVER MORE <i className="fa-solid fa-chevron-right" />
                </MButton>
              </div>
            </div>

            <motion.div variants={imgAnimations} custom={1} className={styles.clothing_img}>
              <MouseParallaxChild factorX={0.2} factorY={0.2}>
                <img src={`/clothing/${theme ? 'cloth2' : 'cloth'}.png`} alt="cloth" />
              </MouseParallaxChild>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </MouseParallaxContainer>
  )
}
